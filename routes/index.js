var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let randomItem = '';

    // read from data.json
    fs.readFile('./data/data.json', 'utf8', function (err, data) {
        if (err) {
            console.error('Error reading data file:', err);
            randomItem = 'Error loading answers.';
        } else {
            try {
                const parsedData = JSON.parse(data);
                const answers = parsedData.answers;
             // randomly select an item from data
                const randomIndex = Math.floor(Math.random() * answers.length);
                randomItem = answers[randomIndex];
            } catch (e) {
                console.error('Error parsing JSON:', e);
                randomItem = 'Invalid data format.';
            }
        }

        // render the index.hbs template with the randomly selected item 
        res.render('index', {
            title: 'My Random Generator',
            randomItem: randomItem,
        });
    });
});

module.exports = router;

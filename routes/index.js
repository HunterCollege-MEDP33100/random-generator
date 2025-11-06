var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let randomItem = '';

    // read from data.json
    fs.readFile('./data/data.json', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return res.render('index', {
                title: 'Band of the Day',
                randomItem: 'Error loading data.'
            });
        }

        const bands = JSON.parse(data);

        // randomly select an item from data
        const randomIndex = Math.floor(Math.random() * bands.length);
        randomItem = bands[randomIndex];

        // render the index.hbs template with the randomly selected item 
        res.render('index', {
            title: 'Band of the Day',
            randomItem: randomItem,
        });
    });
});

module.exports = router;

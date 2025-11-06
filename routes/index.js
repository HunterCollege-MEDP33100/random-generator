var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // read from data.json
    fs.readFile('./data/data.json', 'utf8', function (err, data) {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading data file');
        }

        // parse the JSON file
        const jsonData = JSON.parse(data);
        const quotes = jsonData.quotes;

        // randomly select an item
        const randomItem = quotes[Math.floor(Math.random() * quotes.length)];

        // render the index.hbs template with the randomly selected item 
        res.render('index', {
            title: 'My Random Generator',
            randomItem: randomItem,
        });
    });
});

module.exports = router;

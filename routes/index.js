var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let randomItem = '';

    // read from data.json
    fs.readFile('./data/data.json', 'utf8', function (err, data) {
        // randomly select an item from data
        let items;
        try{
            items = JSON.parse(data);
        } catch (parseErr) {
            console.error(parseErr);
            return res.status(500).send('Error parsing data file.');
        }

        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
        // render the index.hbs template with the randomly selected item 
        res.render('index', {
            title: 'My Random Generator',
            randomItem: randomItem,
        });
    });
});

module.exports = router;

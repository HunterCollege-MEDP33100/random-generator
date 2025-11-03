var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let randomItemHex = '';
    let randomItemCode = '';
    let randomItemName = '';

    // read from data.json
    fs.readFile('./data/data.json', 'utf8', function (err, data) {
        // randomly select an item from data

        if (err) {
            console.log(err);
            res.statusCode = 404;
            res.send('Sorry not found');
        }

        let parseData = JSON.parse(data);
        let randomNum = Math.floor(Math.random() * parseData.length)

        let randomItemHex = parseData[randomNum].hex;
        let randomItemCode = parseData[randomNum].code;
        let randomItemName = parseData[randomNum].name;

        // render the index.hbs template with the randomly selected item 
        res.render('index', {
            title: 'Random Pantone Card',
            randomItemHex: randomItemHex,
            randomItemCode: randomItemCode,
            randomItemName: randomItemName,
        });
    });
});

module.exports = router;

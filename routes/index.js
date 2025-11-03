var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile('./data/data.json', 'utf8', function (err, data) {
    if (err) {
      console.log(err)
      res.status(404).send('Not found')
    } else {
      const parsedData = JSON.parse(data)
      const fortunes = parsedData.fortunes
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
      res.render('index', { randomFortune });
    }
  })
}
);

module.exports = router;

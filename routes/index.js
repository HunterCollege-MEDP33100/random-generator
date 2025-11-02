var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile('./data/data.json', 'utf8', function (err, data) {
    if (err) {
      console.log(err)
      res.status(404).send('Not found')
    } else {
      const parsedData = JSON.parse(data)
      const fortunes = data.fortunes
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
      res.render('index', { randomFortune });
    }
  })
}
);

module.exports = router;

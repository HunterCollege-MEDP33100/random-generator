var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const randomItem = 'this should be a random item';
  res.render('index', {
    title: 'My Random Generator',
    randomItem: randomItem,
    
 });
});

module.exports = router;

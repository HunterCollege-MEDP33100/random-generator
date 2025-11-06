const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/', function(req, res, next) {
 
  const dataPath = path.join(__dirname, '../data/data.json');
  const rawData = fs.readFileSync(dataPath);
  const data = JSON.parse(rawData);
  

  const fortunes = data.fortunes;
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const randomFortune = fortunes[randomIndex];
  

  res.render('index', { 
    title: 'Fortune Cookie Generator',
    fortune: randomFortune 
  });
});

module.exports = router;
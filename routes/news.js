const express = require('express');
const router = express.Router();
const dbConnection = require('../config/dbConnection')

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'News' });
  const connection = dbConnection()
  connection.query("SELECT * FROM news", (error, result) =>{
      
    res.render('news/news', {
        news: result
        
    })

  })
});

module.exports = router;

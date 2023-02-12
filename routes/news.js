const express = require('express');
const router = express.Router();
const dbConnection = require('../config/dbConnection')

const db_local = require('../config/db_local')

let connection = ''

if(process.env.NODE_ENV==='production'){

  connection = dbConnection()
}else{

  connection = db_local()
}

router.get('/', function(req, res, next) {
  console.log(req.query)
  let atras = true
  let siguiente = true
  
  let limite = req.query.new-1
  console.log("limite",limite)
  
  if(!limite || limite<0){
    limite=0
    atras = false
  }

  connection.query("select id_news from news ORDER BY id_news DESC LIMIT 1;",(error,result) => {
    console.log(result)
    if(limite>=result[0].id_news){
      console.log("es mayor",limite)
      limite=result[0].id_news-3

      siguiente = false

    }
    
    console.log(limite)
    connection.query(`SELECT * FROM news LIMIT ${limite},3`, (error, result) =>{
        
      res.render('news/news', {
          news: result,
          atras,
          siguiente
      })
    })
  });
})

router.post('/', function(req, res, next) {

    console.log(req.body)
    const {title, news} = req.body
    
    connection.query('INSERT INTO news SET ?', { title, news }, (error,result) =>{
        res.redirect('/news')
    })
  });
module.exports = router;

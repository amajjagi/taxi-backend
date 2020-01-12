var express = require('express');

var app = express();
const bodyparser = require('body-parser');
const db = require('./mysql2/database');

app.use(express.json())

app.use(express.static('./forms'))
app.use(bodyparser.urlencoded({ extended : false }));
app.set('view engine','ejs');
app.set('views','ejs');

app.use(bodyparser.json());

app.get('/',(req, res) => {
  res.render('../forms/views');
});

app.post('/out' , (req, res) => {
const origin = req.body.origin;
console.log('origin',origin);
const destination = req.body.destination;
console.log('destination',destination);
const datepicker= req.body.datepicker;
console.log('datepicker',datepicker);

  //   var sql = "insert into products values ?";
  //   var values = [[id,title,desc,url]];
  // db.query(sql,[values],(err,res) => {
  //    if(err) throw err;
  //    else
  //    console.log('data inserted',rows);
  // });
 
  res.render('../forms/views',{
    
  });
  res.end();
  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
})

module.export = app;
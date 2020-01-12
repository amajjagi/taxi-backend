var express = require('express');

var app = express();
const bodyparser = require('body-parser');
// const db = require('./mysql2/database');

//to get json data from myjson.com
var getJSON = require('get-json')

// To allow access control origins - Start
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});
///End////
app.use(express.json())

app.use(express.static('./forms'))
app.use(bodyparser.urlencoded({ extended : false }));
app.set('view engine','ejs');
app.set('views','ejs');

app.use(bodyparser.json());

app.get('/cities',(req, res) => {
  getJSON('https://api.myjson.com/bins/18h93q', function(error, response){
    res.send(response);
})
});

app.get('/booking-details',(req, res) => {
  getJSON('https://api.myjson.com/bins/1f7huy', function(error, response){
    var to = req.query.to;
response.forEach((value) => {
  if(value.to === to){
    var price;
    if(value.distance<= 300){
      price =  300 * 15;
    }else{
      price = value.distance * 15;
    }
    value['price']= price+300;
    res.send(value);
  }
});
})
});

const PORT = process.env.PORT || 2300;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
})

module.export = app;
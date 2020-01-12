var express = require('express');

var app = express();
const bodyparser = require('body-parser');
const db = require('./mysql2/database');
var getJSON = require('get-json')

app.use(express.json())

app.use(express.static('./forms'))
app.use(bodyparser.urlencoded({ extended : false }));
app.set('view engine','ejs');
app.set('views','ejs');

app.use(bodyparser.json());

app.get('/cities',(req, res) => {
  getJSON('https://api.myjson.com/bins/1f7huy', function(error, response){
    res.send(response);
})
});

app.get('/booking-details',(req, res) => {
  getJSON('https://api.myjson.com/bins/1f7huy', function(error, response){
    var to = req.query.to;
response.forEach((value) => {
  if(value.to === to){
    value['price'] = value.distance * 15;
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
var express = require('express');

var app = express();
const bodyparser = require('body-parser');
const db = require('./mysql2/database');
var getJSON = require('get-json')
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});
app.use(express.json())

app.use(express.static('./forms'))
app.use(bodyparser.urlencoded({ extended : false }));
app.set('view engine','ejs');
app.set('views','ejs');

app.use(bodyparser.json());

app.get('/buses',(req, res) => {
  getJSON('https://api.myjson.com/bins/18h93q', function(error, response){
    res.send(response);
})
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
})

module.export = app;
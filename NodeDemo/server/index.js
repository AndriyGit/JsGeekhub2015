/**
 * Created by andrey on 16.11.15.
 */

var path = require('path'),
      express = require('express'),
      jade = require('hamljs');
var fs = require('fs');

var app = express(),
    server = require('http').Server(app);

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('main', {pageTitle: 'Main page'});
});

app.get('/about', function(req, res) {
  res.render('about', {pageTitle: 'About page'});
});

server.listen(4000);
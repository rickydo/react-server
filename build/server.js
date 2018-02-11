'use strict';

var express = require('express'),
    app = express(),
    mongojs = require('mongojs'),
    AuthView = require('./react/auth'),
    bodyParser = require('body-parser');

// serve what's in the public folder
app.use(express.static('public'));

// when things are posted make sure we can access it
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.route('/register').get(function (req, result) {
  var body = AuthView.register("This is a message from the server");
  // render file with param
  result.render('layout/overlay', {
    title: 'Register',
    body: body
  });
}).post(function (req, result) {
  result.send("Post it!");
});

app.listen(3001, function () {
  console.log("Our server is running on 3001!");
});
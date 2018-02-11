const express = require('express'),
      app = express(),
      mongojs = require('mongojs'),
      AuthView = require('./react/auth'),
      bodyParser = require('body-parser');

// serve what's in the public folder
app.use(express.static('public'));

// when things are posted make sure we can access it
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.route('/register')
  .get((req, result) => {
    var body = AuthView.register("This is a message from the server");
    // render file with param
    result.render('layout/overlay', {
      title: 'Register',
      body: body
    });
  })
  .post((req, result) => {
    var db = mongojs('mysite', ['users']);
    var email = req.body.email;
    var password = req.body.password1;

    if(password != req.body.password2) {
      var body = AuthView.register("Please match passwords");
      // render file with param
      result.render('layout/overlay', {
        title: 'Register',
        body: body
      });
    }
  })

app.listen(3001, () => {
  console.log("Our server is running on 3001!");
})

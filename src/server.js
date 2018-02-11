const express = require('express'),
      app = express(),
      mongojs = require('mongojs'),
      bodyParser = require('body-parser');

// serve what's in the public folder
app.use(express.static('public'));

// when things are posted make sure we can access it
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.route('/register')
  .get((req, result) => {
    // render file with param
    result.render('layout/overlay', {
      title: 'Register',
      body: 'I get it!'
    });
  })
  .post((req, result) => {
    result.send("Post it!");
  })

app.listen(3001, () => {
  console.log("Our server is running on 3001!");
})

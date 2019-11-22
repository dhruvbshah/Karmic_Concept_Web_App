var express = require('express');


var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');

var path = require('path');

app.set('views', path.join(__dirname, 'views'));

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname + 'views')));

// Routes
//app.get('/', routes.index);
//app.get('/contact', routes.index);

// index page 
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

// Listen on port 5000
//app.listen(process.env.PORT || 5000);

app.listen(process.env.PORT || 5000);

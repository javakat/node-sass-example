var express = require('express');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');

//var routes = require('./routes/index');

var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public';

var app = express();

app.use(sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'expanded'
}));

app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;

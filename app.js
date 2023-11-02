var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs = require('hbs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var travelRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var roomsRouter = require('./routes/rooms');
var contactRouter = require('./routes/contact');
var mealsRouter = require('./routes/meals');
var newsRouter = require('./routes/news');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server','views'));
hbs.registerPartials(path.join(__dirname, 'app_sever', 'views/partials'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/about', aboutRouter);
app.use('/rooms', roomsRouter);
app.use('/contact', contactRouter);
app.use('/meals', mealsRouter);
app.use('/news', newsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

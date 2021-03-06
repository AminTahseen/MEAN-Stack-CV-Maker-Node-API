var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParser=require('body-parser');
const {mongoose}=require('./db');

const cors=require('cors');


//newly added
//--------------------------------
const contact=require('./routes/contact.routes');
const users=require('./routes/user.routes');
const education=require('./routes/education.routes');
const workExp=require('./routes/workExp.routes');
const researchExp=require('./routes/researchExp.routes');
const references=require('./routes/references.routes');
const extraFields=require('./routes/extraFields.routes');
//--------------------------------

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({origin:'http://localhost:4200'})); //this allows cross communication with Angular


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//newly added
//--------------------------------
app.use('/contactUs',contact);
app.use('/users',users);
app.use('/edu',education);
app.use('/workExp',workExp);
app.use('/researchExp',researchExp);
app.use('/references',references);
app.use('/extraFields',extraFields);
//--------------------------------

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

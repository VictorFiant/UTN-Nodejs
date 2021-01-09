var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var routerControllers = require('./routes/products');
var RegistroRouter = require('./routes/registro');
var LoginRouter = require('./routes/login');
var updateRouter = require('./routes/update');
var removalRouter = require('./routes/removal');
var creationRouter = require('./routes/creation');

// const porque es una constante, no va a cambiar a lo largo de la execucion de la app
var ProductController = require('./controllers/ProductController');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', routerControllers);
app.use('/registro', RegistroRouter);
app.use('/login', LoginRouter);
app.use('/actualizar', updateRouter);
app.use('/eliminar', removalRouter);
app.use('/crear', creationRouter);

// Directo el controller
app.use('/product', ProductController);

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

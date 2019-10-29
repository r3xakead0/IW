<<<<<<< HEAD
import app from "./app";
import "@babel/polyfill";

// Starting
async function main() {
  await app.listen(app.get('port'));
  console.log('Server is in port', app.get('port'));
}

main();
=======
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
// const session = require('express-session');
// const validator = require('express-validator');
// const passport = require('passport');
// const flash = require('connect-flash');
// const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');
const multer = require('multer');

// const { database } = require('./keys');

// Intializations
const app = express();
// require('./lib/passport');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: 'hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', 'hbs');

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multer({ dest: path.join(__dirname, '/public/document/temp') }).single('documento'))

// app.use(session({
//   secret: 'chainiz',
//   resave: false,
//   saveUninitialized: false,
//   store: new MySQLStore(database)
// }));
// app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(validator());

// Global variables
// app.use((req, res, next) => {
//   app.locals.message = req.flash('message');
//   app.locals.success = req.flash('success');
//   app.locals.user = req.user;
//   next();
// });

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/tickets', require('./routes/tickets'));
app.use('/activities', require('./routes/activities'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting
app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c

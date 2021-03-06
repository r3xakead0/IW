import express from "express";
import morgan from "morgan";
import path from "path";
import exphbs from "express-handlebars";
import multer from "multer";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import "./lib/passport";

// Initialization
const app = express();

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

app.use(session({ secret: 'chainiz', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  if (req.query._method == 'DELETE') {
    req.method = 'DELETE';
    req.url = req.path;
  } else if (req.query._method == 'PUT') {
    req.method = 'PUT';
    req.url = req.path;
  }
  next();
});

// Global variables
app.use((req, res, next) => {
  app.locals.user = req.user;
  next();
});

// Importing routes
import indexRoutes from "./routes/index";
import usersRoutes from "./routes/users";
import athletesRoutes from "./routes/athletes";
import evaluationsRoutes from "./routes/evaluation";
import plansRoutes from "./routes/plans";

// Routes
app.use('/', indexRoutes);
app.use('/users', usersRoutes);
app.use('/athletes', athletesRoutes);
app.use('/evaluations', evaluationsRoutes);
app.use('/plans', plansRoutes);

// public
app.use(express.static(path.join(__dirname, 'public')));

export default app;

import express, { json } from "express";
import morgan from "morgan";
<<<<<<< HEAD
import path from "path";
import exphbs from "express-handlebars";
import multer from "multer";
=======
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c

// importing routes
import profileRoutes from "./routes/profiles";
import userRoutes from "./routes/users";

// initialization
const app = express();

<<<<<<< HEAD
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

// middlewares
app.use(morgan('dev'));
app.use(json());
app.use(multer({ dest: path.join(__dirname, '/public/document/temp') }).single('documento'))

// routes
app.use('/profiles', profileRoutes);
app.use('/users', userRoutes);

// public
app.use(express.static(path.join(__dirname, 'public')));

export default app;
=======
// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/profiles', profileRoutes);
app.use('/api/users', userRoutes);

export default app;
>>>>>>> 1316f13d4a5331f7a677eba6b533ae998dc6283c

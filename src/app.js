import express, { json } from "express";
import morgan from "morgan";
import path from "path";
import exphbs from "express-handlebars";
import multer from "multer";

// importing routes
import profileRoutes from "./routes/profiles";
import userRoutes from "./routes/users";

// initialization
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

import express, { json } from "express";
import morgan from "morgan";

// importing routes
import profileRoutes from "./routes/profiles";
import userRoutes from "./routes/users";

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/profiles', profileRoutes);
app.use('/api/users', userRoutes);

export default app;
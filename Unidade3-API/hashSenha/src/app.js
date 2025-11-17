import express from 'express';
import userRoutes from './routes/user.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

app.use(errorMiddleware);

export default app;
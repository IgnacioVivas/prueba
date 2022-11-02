import express from 'express';
import instrumentsRoutes from './routes/instruments.routes.js';

const app = express();

//middlewares
app.use(express.json());

app.use(instrumentsRoutes);

export default app;

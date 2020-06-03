import 'reflect-metadata';
import express from 'express';

import './database';

import userRoutes from './routes/User';


const app = express();

app.use(express.json());

app.use('/user', userRoutes);

app.listen(3333, () => {
    console.log('Server Started on Port 3333!');
});


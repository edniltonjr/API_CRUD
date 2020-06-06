import 'reflect-metadata';
import express from 'express';
// import cors from 'cors';

import './database';

import userRoutes from './routes/User';
import receiptRoutes from './routes/Receipt';
import crmsRoutes from './routes/Crms';



const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
// app.use(cors());
app.use('/crms', crmsRoutes);
app.use('/user', userRoutes);
app.use('/receipt', receiptRoutes);

app.listen(process.env.PORT || 3001, () => {

    console.log(`Server Started on ${port} `);
});


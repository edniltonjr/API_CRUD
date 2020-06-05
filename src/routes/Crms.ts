import express, { Router } from 'express';

import { index, create } from '../controllers/CrmsController';
// import authMiddleware from '../middlewares/auth';


const routes = Router();


// routes.use(authMiddleware);

routes.get('/list', index);
routes.post('/add', create )

export default routes;

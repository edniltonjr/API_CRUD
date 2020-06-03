import express, { Router } from 'express';

import { create, index } from '../controllers/ReceiptController';


const routes = Router();

routes.get('/list', index);
routes.post('/new', create);

export default routes;

import express, { Router } from 'express';

import { signUp, signIn } from '../controllers/UserController';



const routes = express.Router();

routes.post('/signup', signUp);
routes.post('/signin', signIn);

export default routes;

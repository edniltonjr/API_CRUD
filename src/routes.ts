import express, { Request, Response } from 'express';


const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({ message: true })
});

export default routes;
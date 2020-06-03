import * as dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

dotenv.config();

interface Payload {
  id: string;
}

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token is empty' });
  }

  const [_, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(
      token,
      String(process.env.SECRET_KEY)
    ) as Payload;

    req.user = {
      id: decoded.id,
    };

    return next();
  } catch {
    return res.status(401).json({ error: 'Token invalid' });
  }
};

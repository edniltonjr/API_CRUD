import * as Yup from 'yup';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

interface IUser {
  name?: string;
  email: string;
  password: string;
}

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email, password }: IUser = req.body;

  const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ error: 'Validation failure' });
  }

  const existEmail = await getRepository(User).findOne({ where: { email } });

  if (existEmail) {
    return res.status(400).json({ error: 'This email already exists' });
  }

  const passwordHash: string = await bcrypt.hash(password, 8);

  const user = getRepository(User).create({
    name,
    email,
    password: passwordHash,
  });
  await getRepository(User).save(user);

  return res.json(user);
};

export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password }: IUser = req.body;

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ error: 'Validation failure' });
  }

  const user = await getRepository(User).findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ error: 'User not fount' });
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(401).json({ error: 'Password does not match' });
  }

  return res.json({
    user: {
      id: user.id,
      name: user.name,
      email,
    },
    token: jwt.sign(
      { id: user.id },
      String(process.env.SECRET_KEY),
      {
        expiresIn: '1d',
      }
    ),
  });
};

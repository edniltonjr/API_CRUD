import { Request, Response, response } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';
import Receipt from '../models/Receipt';

interface IReceipt {
  emitter: string;
  value: number;
  description: string;
  document: string;
}

export const index = async (
  req: Request,
  res: Response
): Promise<Response> => {


  const { emitter, document } = req.query;
  const { page = 1 } = req.query;
  const parserNumber = Number(page);
  const receipts = await getRepository(Receipt).find({
    where: [
       {emitter: emitter},
       {document: document},
    ],
    take: 10,
    skip: (parserNumber - 1) * 10,
  });

  const receiptsAll = await getRepository(Receipt).find({
    take: 10,
    skip: (parserNumber - 1) * 10,
  });

  return !emitter && !document ? res.json(receiptsAll) : res.json(receipts);
};


export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { emitter, value, description, document }: IReceipt = req.body;

  const schema = Yup.object().shape({
    emitter: Yup.string(),
    value: Yup.number().required(),
    description: Yup.string().required(),
    document: Yup.string().required()
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ error: 'Validation failure' });
  }

  const receipt = getRepository(Receipt).create({
    emitter,
    value,
    description,
    document
  });
  await getRepository(Receipt).save(receipt);

  return res.json(receipt);
};

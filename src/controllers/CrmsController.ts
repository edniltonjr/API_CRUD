import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Crms from '../models/Crms';

interface IResult {

  id: string;
  data: string;
  hora: string;
  origem: string;
  destino: string;
  tempo_total: string;
  sentido: string;
  codigo_usuario: string;
  nome_usuario: string;
  chave: string;
  dnis: string;
  status: string;
  resultado: string;
  cdr_disposition: string;
  codigo_campanha: string;
  codigo_tronco: string;
  nome_tronco: string;
  tipo_ligacao: string;
  cadencia: string;
  tarifa: string;
  custo_ligacao: string;
  tabulacao: string;
  abordagem: string;
  conversao: string;
  gravacao_id: string;
  mailing_id: string;
  gravacao_inicio: string;
  gravacao_arquivo: string;
  amd_status: string;
  hangup_cause: string;
  origem_ligacao: string;
  hora_finalizacao: string;
  hora_encerramento: string;
  ligacao_id: string;
  codigo_conversao_nome: string;
  cpf: string;
  extension: string;
  call_nome: string;
  campolivre01: string;
  asterisk_channel: string;
  tempo_espera: string;
  protocolo_atendimento: string;
  obs_operador: string;
  anotacao_operador: string;
  tempo_tarifado: string;
  hora_dac: string;
  hora_atendida: string;
}

// interface RootObject {
//   CODIGO: number;
//   STATUS: string;
//   RESULTADO: RESULT[];
// }

export const index = async (
  req: Request,
  res: Response
): Promise<Response> => {


  const { page = 1 } = req.query;
  const parserNumber = Number(page);
  const crmsAll = await getRepository(Crms).find({
    take: 10,
    skip: (parserNumber - 1) * 10,
  });

  return res.json({ CODIGO: 10, STATUS: "SUCESSO", RESULTADO: crmsAll }) ;
};


export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const {

  id,
  data,
  hora,
  origem,
  destino,
  tempo_total,
  sentido,
  codigo_usuario,
  nome_usuario,
  chave,
  dnis,
  status,
  resultado,
  cdr_disposition,
  codigo_campanha,
  codigo_tronco,
  nome_tronco,
  tipo_ligacao,
  cadencia,
  tarifa,
  custo_ligacao,
  tabulacao,
  abordagem,
  conversao,
  gravacao_id,
  mailing_id,
  gravacao_inicio,
  gravacao_arquivo,
  amd_status,
  hangup_cause,
  origem_ligacao,
  hora_finalizacao,
  hora_encerramento,
  ligacao_id,
  codigo_conversao_nome,
  cpf,
  extension,
  call_nome,
  campolivre01,
  asterisk_channel,
  tempo_espera,
  protocolo_atendimento,
  obs_operador,
  anotacao_operador,
  tempo_tarifado,
  hora_dac,
  hora_atendida
  }: IResult = req.body;

  // const schema = Yup.object().shape({
  //   emitter: Yup.string(),
  //   value: Yup.number().required(),
  //   description: Yup.string().required(),
  //   document: Yup.string().required()
  // });

  // if (!(await schema.isValid(req.body))) {
  //   return res.status(400).json({ error: 'Validation failure' });
  // }

  const crms = getRepository(Crms).create({
    id,
    data,
    hora,
    origem,
    destino,
    tempo_total,
    sentido,
    codigo_usuario,
    nome_usuario,
    chave,
    dnis,
    status,
    resultado,
    cdr_disposition,
    codigo_campanha,
    codigo_tronco,
    nome_tronco,
    tipo_ligacao,
    cadencia,
    tarifa,
    custo_ligacao,
    tabulacao,
    abordagem,
    conversao,
    gravacao_id,
    mailing_id,
    gravacao_inicio,
    gravacao_arquivo,
    amd_status,
    hangup_cause,
    origem_ligacao,
    hora_finalizacao,
    hora_encerramento,
    ligacao_id,
    codigo_conversao_nome,
    cpf,
    extension,
    call_nome,
    campolivre01,
    asterisk_channel,
    tempo_espera,
    protocolo_atendimento,
    obs_operador,
    anotacao_operador,
    tempo_tarifado,
    hora_dac,
    hora_atendida
  });

  await getRepository(Crms).save(crms);

  return res.json(crms);
};


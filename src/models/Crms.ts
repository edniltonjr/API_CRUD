import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crms')
class Crms {
  @PrimaryGeneratedColumn()
  id_crms: string;

  @Column()
  id: string;

  @Column()
  data: string;

  @Column()
  hora: string;

  @Column()
  origem: string;

  @Column()
  destino: string;

  @Column()
  tempo_total: string;

  @Column()
  sentido: string;

  @Column()
  codigo_usuario: string;

  @Column()
  nome_usuario: string;

  @Column()
  chave: string;

  @Column()
  dnis: string;

  @Column()
  status: string;

  @Column()
  resultado: string;

  @Column()
  cdr_disposition: string;

  @Column()
  codigo_campanha: string;

  @Column()
  codigo_tronco: string;

  @Column()
  nome_tronco: string;

  @Column()
  tipo_ligacao: string;

  @Column()
  cadencia: string;

  @Column()
  tarifa: string;

  @Column()
  custo_ligacao: string;

  @Column()
  tabulacao: string;

  @Column()
  abordagem: string;

  @Column()
  conversao: string;

  @Column()
  gravacao_id: string;


  @Column()
  mailing_id: string;


  @Column()
  gravacao_inicio: string;


  @Column()
  gravacao_arquivo: string;


  @Column()
  amd_status: string;


  @Column()
  hangup_cause: string;

  @Column()
  origem_ligacao: string;

  @Column()
  hora_finalizacao: string;

  @Column()
  hora_encerramento: string;

  @Column()
  ligacao_id: string;

  @Column()
  codigo_conversao_nome: string;

  @Column()
  cpf: string;

  @Column()
  extension: string;

  @Column()
  call_nome: string;

  @Column()
  campolivre01: string;

  @Column()
  asterisk_channel: string;

  @Column()
  tempo_espera: string;

  @Column()
  protocolo_atendimento: string;

  @Column()
  obs_operador: string;

  @Column()
  anotacao_operador: string;

  @Column()
  tempo_tarifado: string;

  @Column()
  hora_dac: string;

  @Column()
  hora_atendida: string;
}

export default Crms;

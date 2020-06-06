import {MigrationInterface, Table, QueryRunner} from "typeorm";

export class Crms1591412146944 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'crms',
          columns: [

            {
              name: 'id_crms',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },

            {
              name: 'id',
              type: 'varchar',
            },
            {
              name: 'data',
              type: 'varchar',
            },
            {
              name: 'hora',
              type: 'varchar',
            },
            {
              name: 'origem',
              type: 'varchar',
            },

            {
              name: 'destino',
              type: 'varchar',
            },

            {
              name: 'tempo_total',
              type: 'varchar',
            },

            {
              name: 'sentido',
              type: 'varchar',
            },

            {
              name: 'codigo_usuario',
              type: 'varchar',
            },

            {
              name: 'nome_usuario',
              type: 'varchar',
            },

            {
              name: 'chave',
              type: 'varchar',
            },

            {
              name: 'dnis',
              type: 'varchar',
            },


            {
              name: 'status',
              type: 'varchar',
            },

            {
              name: 'resultado',
              type: 'varchar',
            },

            {
              name: 'codigo_campanha',
              type: 'varchar',
            },

            {
              name: 'codigo_tronco',
              type: 'varchar',
            },

            {
              name: 'nome_tronco',
              type: 'varchar',
            },

            {
              name: 'cadencia',
              type: 'varchar',
            },

            {
              name: 'tarifa',
              type: 'varchar',
            },

            {
              name: 'custo_ligacao',
              type: 'varchar',
            },

            {
              name: 'tabulacao',
              type: 'varchar',
            },

            {
              name: 'abordagem',
              type: 'varchar',
            },

            {
              name: 'conversao',
              type: 'varchar',
            },

            {
              name: 'gravacao_id',
              type: 'varchar',
            },

            {
              name: 'mailing_id',
              type: 'varchar',
            },

            {
              name: 'gravacao_inicio',
              type: 'varchar',
            },

            {
              name: 'gravacao_arquivo',
              type: 'varchar',
            },

            {
              name: 'amd_status',
              type: 'varchar',
            },

            {
              name: 'hangup_cause',
              type: 'varchar',
            },

            {
              name: 'origem_ligacao',
              type: 'varchar',
            },

            {
              name: 'hora_finalizacao',
              type: 'varchar',
            },

            {
              name: 'hora_encerramento',
              type: 'varchar',
            },

            {
              name: 'ligacao_id',
              type: 'varchar',
            },

            {
              name: 'codigo_conversao_nome',
              type: 'varchar',
            },

            {
              name: 'cpf',
              type: 'varchar',
            },

            {
              name: 'extension',
              type: 'varchar',
            },


            {
              name: 'call_nome',
              type: 'varchar',
            },

            {
              name: 'campolivre01',
              type: 'varchar',
            },

            {
              name: 'asterisk_channel',
              type: 'varchar',
            },

            {
              name: 'tempo_espera',
              type: 'varchar',
            },

            {
              name: 'protocolo_atendimento',
              type: 'varchar',
            },

            {
              name: 'obs_operador',
              type: 'varchar',
            },

            {
              name: 'anotacao_operador',
              type: 'varchar',
            },

            {
              name: 'tempo_tarifado',
              type: 'varchar',
            },

            {
              name: 'hora_dac',
              type: 'varchar',
            },

            {
              name: 'hora_atendida',
              type: 'varchar',
            },

            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        })
        );
        }

        public async down(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.dropTable('crms');
        }
        }

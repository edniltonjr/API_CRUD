"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.index = void 0;
var typeorm_1 = require("typeorm");
var Crms_1 = __importDefault(require("../models/Crms"));
// interface RootObject {
//   CODIGO: number;
//   STATUS: string;
//   RESULTADO: RESULT[];
// }
exports.index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, page, parserNumber, crmsAll;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query.page, page = _a === void 0 ? 1 : _a;
                parserNumber = Number(page);
                return [4 /*yield*/, typeorm_1.getRepository(Crms_1.default).find({
                        take: 10,
                        skip: (parserNumber - 1) * 10,
                    })];
            case 1:
                crmsAll = _b.sent();
                return [2 /*return*/, res.json({ CODIGO: 10, STATUS: "SUCESSO", RESULTADO: crmsAll })];
        }
    });
}); };
exports.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, data, hora, origem, destino, tempo_total, sentido, codigo_usuario, nome_usuario, chave, dnis, status, resultado, cdr_disposition, codigo_campanha, codigo_tronco, nome_tronco, tipo_ligacao, cadencia, tarifa, custo_ligacao, tabulacao, abordagem, conversao, gravacao_id, mailing_id, gravacao_inicio, gravacao_arquivo, amd_status, hangup_cause, origem_ligacao, hora_finalizacao, hora_encerramento, ligacao_id, codigo_conversao_nome, cpf, extension, call_nome, campolivre01, asterisk_channel, tempo_espera, protocolo_atendimento, obs_operador, anotacao_operador, tempo_tarifado, hora_dac, hora_atendida, crms;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, data = _a.data, hora = _a.hora, origem = _a.origem, destino = _a.destino, tempo_total = _a.tempo_total, sentido = _a.sentido, codigo_usuario = _a.codigo_usuario, nome_usuario = _a.nome_usuario, chave = _a.chave, dnis = _a.dnis, status = _a.status, resultado = _a.resultado, cdr_disposition = _a.cdr_disposition, codigo_campanha = _a.codigo_campanha, codigo_tronco = _a.codigo_tronco, nome_tronco = _a.nome_tronco, tipo_ligacao = _a.tipo_ligacao, cadencia = _a.cadencia, tarifa = _a.tarifa, custo_ligacao = _a.custo_ligacao, tabulacao = _a.tabulacao, abordagem = _a.abordagem, conversao = _a.conversao, gravacao_id = _a.gravacao_id, mailing_id = _a.mailing_id, gravacao_inicio = _a.gravacao_inicio, gravacao_arquivo = _a.gravacao_arquivo, amd_status = _a.amd_status, hangup_cause = _a.hangup_cause, origem_ligacao = _a.origem_ligacao, hora_finalizacao = _a.hora_finalizacao, hora_encerramento = _a.hora_encerramento, ligacao_id = _a.ligacao_id, codigo_conversao_nome = _a.codigo_conversao_nome, cpf = _a.cpf, extension = _a.extension, call_nome = _a.call_nome, campolivre01 = _a.campolivre01, asterisk_channel = _a.asterisk_channel, tempo_espera = _a.tempo_espera, protocolo_atendimento = _a.protocolo_atendimento, obs_operador = _a.obs_operador, anotacao_operador = _a.anotacao_operador, tempo_tarifado = _a.tempo_tarifado, hora_dac = _a.hora_dac, hora_atendida = _a.hora_atendida;
                crms = typeorm_1.getRepository(Crms_1.default).create({
                    id: id,
                    data: data,
                    hora: hora,
                    origem: origem,
                    destino: destino,
                    tempo_total: tempo_total,
                    sentido: sentido,
                    codigo_usuario: codigo_usuario,
                    nome_usuario: nome_usuario,
                    chave: chave,
                    dnis: dnis,
                    status: status,
                    resultado: resultado,
                    cdr_disposition: cdr_disposition,
                    codigo_campanha: codigo_campanha,
                    codigo_tronco: codigo_tronco,
                    nome_tronco: nome_tronco,
                    tipo_ligacao: tipo_ligacao,
                    cadencia: cadencia,
                    tarifa: tarifa,
                    custo_ligacao: custo_ligacao,
                    tabulacao: tabulacao,
                    abordagem: abordagem,
                    conversao: conversao,
                    gravacao_id: gravacao_id,
                    mailing_id: mailing_id,
                    gravacao_inicio: gravacao_inicio,
                    gravacao_arquivo: gravacao_arquivo,
                    amd_status: amd_status,
                    hangup_cause: hangup_cause,
                    origem_ligacao: origem_ligacao,
                    hora_finalizacao: hora_finalizacao,
                    hora_encerramento: hora_encerramento,
                    ligacao_id: ligacao_id,
                    codigo_conversao_nome: codigo_conversao_nome,
                    cpf: cpf,
                    extension: extension,
                    call_nome: call_nome,
                    campolivre01: campolivre01,
                    asterisk_channel: asterisk_channel,
                    tempo_espera: tempo_espera,
                    protocolo_atendimento: protocolo_atendimento,
                    obs_operador: obs_operador,
                    anotacao_operador: anotacao_operador,
                    tempo_tarifado: tempo_tarifado,
                    hora_dac: hora_dac,
                    hora_atendida: hora_atendida
                });
                return [4 /*yield*/, typeorm_1.getRepository(Crms_1.default).save(crms)];
            case 1:
                _b.sent();
                return [2 /*return*/, res.json(crms)];
        }
    });
}); };

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crms1591352028621 = void 0;
var typeorm_1 = require("typeorm");
var Crms1591352028621 = /** @class */ (function () {
    function Crms1591352028621() {
    }
    Crms1591352028621.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
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
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Crms1591352028621.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropTable('crms')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Crms1591352028621;
}());
exports.Crms1591352028621 = Crms1591352028621;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Crms = /** @class */ (function () {
    function Crms() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", String)
    ], Crms.prototype, "id_crms", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "data", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "hora", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "origem", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "destino", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "tempo_total", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "sentido", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "codigo_usuario", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "nome_usuario", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "chave", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "dnis", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "resultado", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "cdr_disposition", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "codigo_campanha", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "codigo_tronco", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "nome_tronco", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "tipo_ligacao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "cadencia", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "tarifa", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "custo_ligacao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "tabulacao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "abordagem", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "conversao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "gravacao_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "mailing_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "gravacao_inicio", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "gravacao_arquivo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "amd_status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "hangup_cause", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "origem_ligacao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "hora_finalizacao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "hora_encerramento", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "ligacao_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "codigo_conversao_nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "cpf", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "extension", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "call_nome", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "campolivre01", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "asterisk_channel", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "tempo_espera", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "protocolo_atendimento", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "obs_operador", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "anotacao_operador", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "tempo_tarifado", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "hora_dac", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Crms.prototype, "hora_atendida", void 0);
    Crms = __decorate([
        typeorm_1.Entity('crms')
    ], Crms);
    return Crms;
}());
exports.default = Crms;

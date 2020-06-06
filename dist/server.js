"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
// import cors from 'cors';
require("./database");
var User_1 = __importDefault(require("./routes/User"));
var Receipt_1 = __importDefault(require("./routes/Receipt"));
var Crms_1 = __importDefault(require("./routes/Crms"));
var app = express_1.default();
var port = process.env.PORT || 3000;
app.use(express_1.default.json());
// app.use(cors());
app.use('/crms', Crms_1.default);
app.use('/user', User_1.default);
app.use('/receipt', Receipt_1.default);
app.listen(process.env.PORT || 3001, function () {
    console.log("Server Started on " + port + " ");
});

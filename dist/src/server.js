"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet")); //politicas de seguridad
const morgan_1 = __importDefault(require("morgan")); //monitorear empoind
const dotenv_1 = __importDefault(require("dotenv")); //rea las variables de entorno
const router_1 = __importDefault(require("./router"));
//import { createConnection } from './../db/models/db_connection';
const app = (0, express_1.default)(); //inicia el servicidor
dotenv_1.default.config(); //configura variales de entorno
/********middleware generales********/
app.use(express_1.default.json()); //permite recibir json
app.use(express_1.default.urlencoded({ extended: false })); //permite analizar los datos enviados en el cuerpo de la petición
app.use((0, helmet_1.default)()); //configuro politicas
app.use((0, morgan_1.default)('dev')); //configuro morgan
app.use('/', router_1.default);
const PORT = process.env.PORT || 3000; //uso la variable entorno paraestablecer el puerto
app.listen(PORT, () => {
    console.log(`LA APP A ARRANCADO EN LA http://localhost:${PORT}`);
}); //el servicior lo coloco a escuchar en el puerto port

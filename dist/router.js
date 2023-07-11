"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router(); //creo el enrutador
const router_1 = __importDefault(require("./modules/admin/router"));
/* ruta general*/
router.get('/', (req, res) => {
    res.json({ servidor: `Soy el servidor "Bienvenido"` });
});
/*Rutas por modulos*/
router.use('/admin', router_1.default);
//TODO debo colocar el retso de las rutas de los modelos 
exports.default = router;

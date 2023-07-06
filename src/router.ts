import express from "express";
const router = express.Router();//creo el enrutador
import adminRouter from './modules/admin/router'
/* ruta general*/
router.get('/', (req, res) => {
    res.json({ servidor: `Soy el servidor "Bienvenido"` });
  });

/*Rutas por modulos*/
router.use('/admin', adminRouter);

//TODO debo colocar el retso de las rutas de los modelos 
  export default router;



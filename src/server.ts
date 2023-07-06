import express from "express";
import helmet from "helmet";//politicas de seguridad
import morgan from 'morgan';//monitorear empoind
import dotenv from 'dotenv'; //rea las variables de entorno
import router from './router'

const app = express();  //inicia el servicidor
dotenv.config();//configura variales de entorno

/********middleware generales********/
app.use(express.json());//permite recibir json
app.use(express.urlencoded({ extended:false}))//permite analizar los datos enviados en el cuerpo de la petición

app.use(helmet());//configuro politicas
app.use(morgan('dev'));//configuro morgan

app.use('/', router);

const PORT = process.env.PORT || 3000 //uso la variable entorno paraestablecer el puerto
app.listen(PORT, () => {
  console.log(`LA APP A ARRANCADO EN LA http://localhost:${PORT}`);
})//el servicior lo coloco a escuchar en el puerto port



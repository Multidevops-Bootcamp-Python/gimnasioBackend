import express from "express";
import helmet from "helmet";//politicas de seguridad
import morgan from 'morgan';//monitorear empoind
const app = express();
/********middleware generales********/
app.use(express.json());
app.use(express.urlencoded({ extended:false}))

app.use(helmet());//configuro politicas
app.use(morgan('dev'));//configuro morgan
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`LA APP A ARRANCADO EN LA http://localhost:${PORT}`);
})



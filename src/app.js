import express from 'express';
import morgan from 'morgan';
//router
import languageRoute from './routes/language.routes';

const app = express();
// settings
app.set('port', process.env.PORT || 4200);

//Middleware 
app.use(morgan('dev')); // muestra los request (peticiones) en consola 

app.use(express.json()); // para que pueda leer los request en formato json

app.use("/api/languages", languageRoute);
export default app;
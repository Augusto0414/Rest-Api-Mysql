import express from 'express';
import morgan from 'morgan'
import languageRoute from './routes/language.routes';

const app = express();
// settings
app.set("port", process.env.PORT || 4200);

//Midelwares 
app.use(morgan('dev')); // muestra los request (peticiones) en consola 
app.use(languageRoute);
export default app;
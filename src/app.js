import express from 'express';
import morgan from 'morgan'

const app = express();
// settings
app.set("port", process.env.PORT || 3000);

//Midelwares 
app.use(morgan('dev')); // muestra los request (peticiones) en consola 
export default app;
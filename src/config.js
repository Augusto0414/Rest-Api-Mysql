import { config } from "dotenv";
config(); // esta linea lee el archivo .env y lo guarda en un objeto

export default {
	  host: process.env.HOST ||"",
	  database: process.env.DATABASE ||"",
	  user: process.env.USER ||"",
	  password: process.env.PASSWORD ||""
};
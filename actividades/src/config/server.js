import express, { json } from "express";
import morgan from "morgan";
import { actividades_router } from "../routes/actividades";

export class Server {
  constructor() {
    this.app = express();
    this.puerto = 8000;
    this.cors();
    this.bodyParser();
    this.rutas();
  }

  bodyParser() {
    this.app.use(json());
  }

  rutas() {
    this.app.use(morgan("dev"));
    this.app.use(actividades_router);
    this.app.get("/", (req, rest) => {
      // req => Request => La información que me envía el cliente
      // rest => Response => La información que le devuelvo al cliente
      rest.status(200).send("Bienvenido a mi API 02");
    });
  }

  cors() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      next();
    });
  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log(`Servidor corriendo en el puerto ${this.puerto}`);
    });
  }
}

// export const x=10;

// const x = 10

// module.exports = {
//     x: x,
// }

const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.pathRoutes = "/api/usuarios";
    //Middlewares
    this.middlewares();
    this.routes();
  }

  middlewares() {
    //directorio publico
    this.app.use(express.static("public"));
    //cors
    this.app.use(cors());
    //lectura y parseo del body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.pathRoutes, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Aplicación corriendo en puerto ", this.port);
    });
  }
}

module.exports = Server;

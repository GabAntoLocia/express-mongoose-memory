const { MongoMemoryServer } = require("mongodb-memory-server");
const express = require("express");
const mongoose = require("mongoose");

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(2202, () =>
      console.log("Ejecutando en localhost 2202")
    );
  }

  async database() {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri);
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;

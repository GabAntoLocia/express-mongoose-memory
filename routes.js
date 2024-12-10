const express = require("express");
const routes = express.Router();
const products = require("./models/productos");
const productsController = require("./controllers/Products/products")


routes.get("/", async (req, res) => {
  const product = await ProductosModel.findById(id);
  res.status(200).send({ response: "OK" });
});

routes.get("/products", (req, res) => productsController.getAllProdcuts(res))
routes.post("/products/", (req, res) => productsController.createProduct(req, res))
routes.put("/products/:id", (req, res) => productsController.updateProduct(req, res))
routes.delete("/products/:id", (req, res) => productsController.updateProduct(req, res))

module.exports = routes;

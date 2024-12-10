const products = require("../../models/productos");
class Product {
    static async getAllProdcuts(res) {
        const product = await products.find();
        console.log(product)
        console.log("products")
        res.send({ product })
    }

    static async createProduct(req, res) {
        const data = req.body
        const newProduct = new products({
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio
        })
        newProduct.save()
        res.status(200).json({
            data
        })
    }

    static async updateProduct(req, res) {
        const { id } = req.params
        const { nombre } = req.body;
        try {
            const item = await products.findByIdAndUpdate(id, {
                nombre
            },
                {
                    new: true
                }
            );
            console.log(item)
            res.status(200).json({
                data
            })

        } catch (e) {
            res.status(e.status).json({
                error: e
            })
        }
    }

    static async deleteProduct(req, res) {
        const { id } = req.params
        try {
            const item = await products.findByIdAndDelete(id);
            console.log(item)
            res.status(202)
        } catch (e) {
            res.status(500).json({
                e
            })
        }
    }
}

module.exports = Product;

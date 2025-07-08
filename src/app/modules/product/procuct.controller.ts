
import express, { Request, Response } from "express"
import { Product } from "./product.model"

export const productRoutes = express.Router()

productRoutes.get("/", async (req: Request, res: Response) => {
    const allProducts = await Product.find()
    res.send(allProducts)

})
productRoutes.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const singleProduct = await Product.findById(id)
    res.send(singleProduct)

})
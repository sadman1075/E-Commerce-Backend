import express, { Application, Request, Response } from "express"
import cors from "cors"
import { productRoutes } from "./modules/product/procuct.controller";

const app:Application = express();

app.use(express.json())
app.use(cors())

app.use("/products",productRoutes)


app.get("/", (req:Request, res:Response) => {
    res.send("app is runing for e-commerce")
})

export default app;
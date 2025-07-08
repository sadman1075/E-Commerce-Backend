import { Server } from "http"
import mongoose from "mongoose";
import app from "./app";

const port = 5000;
let server: Server

async function main() {
    try {
        await mongoose.connect('mongodb+srv://E-Commerce:E-Commerce@cluster0.62b40ek.mongodb.net/E-Commerce?retryWrites=true&w=majority&appName=Cluster0');
        server = app.listen(port, () => {
            console.log(`the server is listening port ${port}`);
        })

    }
    catch (err) {

    }
}



main()
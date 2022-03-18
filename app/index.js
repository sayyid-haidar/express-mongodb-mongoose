import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { PORT } from "./config.js";
import product_routes from "./routes/product_route.js";

const app = express();

const error_handling = (err, req, res, next) => {
    return res.status(500).json({message: err.toString()});
}

mongoose.connect("mongodb://localhost:27017/testingDB")
    .then(() => console.log("DB berhasil connect"))
    .catch((err) => console.log(err));

app.use(error_handling);
app.use(bodyParser.json({ type: "application/json" }));
app.use("/products", product_routes);


app.listen(PORT);

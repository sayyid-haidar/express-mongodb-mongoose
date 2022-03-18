import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Jangan kosongkan name"],
    unique: true,
    validate: {
        validator: (param) => {
            return (param == "") ? false : true;
        }
    }
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: (type) => {
        return (type != "ANY") ? false : true;
    },
    default: "ANY"
  },
  qty: {
    type: Number,
    required: true,
    max: [100, "Maksimal qty adalah 100"],
    min: [1, "Minimal qty adalah 1"]
  },
});

const Product = model("Product", productSchema);

export default Product;

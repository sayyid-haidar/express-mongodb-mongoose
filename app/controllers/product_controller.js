import products from "../data/product.json" assert { type: "json" };
import Product from "../models/Product.js";

export const get_product = async (req, res, next) => {
  try {
    const { product_id } = req.params;
    let product = await Product.findOne({ _id: product_id });

    return res.status(200).json(product);
  } catch (err) {
    return next(err);
  }
};

export const get_products = async (req, res, next) => {
  try {
    let products = await Product.find({});

    return res.status(200).json(products);
  } catch (err) {
    return next(err);
  }
};

export const add_product = async (req, res, next) => {
  try {
    const { name, price, type, qty } = req.body;

    let product = await Product.create({
      name: name,
      price: price,
      type: type,
      qty: qty,
    });

    return res.status(201).json(product);
  } catch (err) {
    return next(err);
  }
};

export const update_product = async (req, res, next) => {
  try {
    const { product_id } = req.params;
    const { name, price, type, qty } = req.body;

    let product = await Product.replaceOne(
      { _id: product_id },
      {
        name: name,
        price: price,
        type: type,
        qty: qty,
      }
    );

    return res.status(200).json(product);
  } catch (err) {
    return next(err);
  }
};

export const delete_product = async (req, res, next) => {
  try {
    const { product_id } = req.params;

    await Product.deleteOne({ _id: product_id });

    return res.status(200).json({ message: "product berhasil di hapus" });
  } catch (err) {
    return next(err);
  }
};

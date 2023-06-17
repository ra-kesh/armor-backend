import { Product } from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ success: true, data: products });
});

const getProductDetails = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  res.status(200).json({ success: true, data: product });
});

export { getAllProducts, getProductDetails };

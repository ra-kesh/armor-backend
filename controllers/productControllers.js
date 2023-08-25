import { Product } from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const { keyword, limit, skip, select, sort } = req.query;

  const query = {};

  if (keyword) {
    query.name = { $regex: keyword, $options: "i" };
  }

  let selectFields = "";
  if (select) {
    selectFields = select.split(",").join(" ");
  }

  const options = {
    limit: parseInt(limit) || 10,
    skip: parseInt(skip) || 0,
    sort: sort || null,
  };

  const products = await Product.find(query)
    .select(selectFields)
    .skip(options.skip)
    .limit(options.limit)
    .sort(options.sort)
    .exec();

  res.status(200).json({ success: true, data: products });
});

const getProductDetails = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  res.status(200).json({ success: true, data: product });
});

export { getAllProducts, getProductDetails };

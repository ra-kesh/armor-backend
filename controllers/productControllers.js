import { Product } from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const { search, limit, skip, select, sort, category } = req.query;

  const query = {};

  if (search) {
    const searchFields = ["name", "description", "category", "brand"];
    query.$or = searchFields.map((field) => ({
      [field]: { $regex: search, $options: "i" },
    }));
  }

  if (category) {
    query.category = category;
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

const getProductCategories = expressAsyncHandler(async (req, res) => {
  const categories = await Product.distinct("category");
  res.status(200).json({ sucess: true, data: categories });
});

export { getAllProducts, getProductDetails, getProductCategories };

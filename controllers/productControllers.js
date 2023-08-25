import { Product } from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const { search, limit, skip, select, sort, category, categories } = req.query;

  const query = {};

  if (search) {
    const searchFields = ["name", "description", "category", "brand"];
    query.$or = searchFields.map((field) => ({
      [field]: { $regex: search, $options: "i" },
    }));
  }

  let categoryArray = [];
  if (categories) {
    categoryArray = categories.split(",");
  }

  if (categoryArray.length > 0) {
    query.category = { $in: categoryArray };
  }

  if (category !== "all") {
    query.category = category;
  }

  let selectFields = "";
  if (select) {
    selectFields = select.split(",").join(" ");
  }

  const options = {
    limit: parseInt(limit) || 50,
    skip: parseInt(skip) || 0,
    sort: sort || null,
  };

  const products = await Product.find(query)
    .select(selectFields)
    .skip(options.skip)
    .limit(options.limit)
    .sort(options.sort)
    .exec();

  const productsCount = await Product.countDocuments().exec();

  const response = {
    products,
    total: category !== "all" ? products.length : productsCount,
    limit: limit,
    skip: skip,
  };

  res.status(200).json(response);
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

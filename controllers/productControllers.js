import { Product } from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const { search, select, sort, category, categories, page, per_page } =
    req.query;

  const query = {};

  if (search) {
    const searchFields = ["name", "description", "category", "brand"];
    query.$or = searchFields.map((field) => ({
      [field]: { $regex: search, $options: "i" },
    }));
  }

  if (categories) {
    const categoryArray = categories.split(",");
    if (categoryArray.length > 0) {
      query.category = { $in: categoryArray };
    }
  } else if (category !== "all") {
    query.category = category;
  }

  if (category === "all" || (!category && !categories)) {
    // No category filter, include all categories
    delete query.category;
  }

  let selectFields = "";
  if (select) {
    selectFields = select.split(",").join(" ");
  }

  const options = {
    limit: parseInt(per_page) || 6,
    skip: (parseInt(page) - 1) * parseInt(per_page) || 0,
    sort: sort || null,
  };

  const productsQuery = Product.find(query)
    .select(selectFields)
    .skip(options.skip)
    .limit(options.limit)
    .sort(options.sort);

  const products = await productsQuery.exec();

  const productsCount = products.length;

  const totalProductsCount = await Product.find(query).countDocuments().exec();

  const totalPages = Math.ceil(totalProductsCount / options.limit);

  const response = {
    products,
    page: parseInt(page) || 1,
    per_page: options.limit,
    total: productsCount,
    total_pages: totalPages,
  };

  res.status(200).json(response);
});

const getProductDetails = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }

  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json({ success: true, product });
});

const getProductCategories = expressAsyncHandler(async (req, res) => {
  const categories = await Product.distinct("category");
  res.status(200).json({ sucess: true, data: categories });
});

export { getAllProducts, getProductDetails, getProductCategories };

import { Product } from "../models/productModel.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.log(err);
    res.status(503).json({ success: false, error: err.message });
  }
};

const getProductDetails = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(503).json({ success: false, error: err.message });
  }
};

export { getAllProducts, getProductDetails };

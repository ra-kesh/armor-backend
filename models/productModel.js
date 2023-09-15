import mongoose from "mongoose";
import { products } from "../data/productData.js";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "name is required",
      // unique: "name must be unique",
    },
    price: {
      type: Number,
      required: "price is required",
    },
    category: {
      type: String,
      required: "category is required",
    },
    image: {
      type: String,
      required: "image is required",
    },
    description: {
      type: String,
      required: "description is required",
    },
    brand: {
      type: String,
      required: "Brand name is required",
    },
    rating: {
      type: Number,
    },
    inStock: {
      type: Boolean,
      required: "please specify in stock or not",
    },
    fastDelivery: {
      type: Boolean,
      required: "please specify available for fast delivery or not",
    },
    discount: {
      type: Number,
    },
    quantities: {
      type: Number,
    },
    sizes: {
      type: Array,
    },
    isFeatured: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

function fillProductsCollection() {
  try {
    products.forEach(async (product) => {
      const newProduct = new Product(product);
      const savedProduct = await newProduct.save();
      console.log(savedProduct);
    });
  } catch (error) {
    console.log(error);
  }
}

export { Product, fillProductsCollection };

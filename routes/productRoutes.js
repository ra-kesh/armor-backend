import express from "express";
import {
  getAllProducts,
  getProductCategories,
  getProductDetails,
  getFeaturedProducts,
} from "../controllers/productControllers.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/categories", getProductCategories);
router.get("/:productId", getProductDetails);

export default router;

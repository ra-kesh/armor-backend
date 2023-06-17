import express from "express";
import {
  getAllProducts,
  getProductDetails,
} from "../controllers/productControllers.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:productId", getProductDetails);

export default router;

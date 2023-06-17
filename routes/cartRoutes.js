import express from "express";
import {
  getAllCartItems,
  addItemsToCart,
  changeItemQuantity,
  removeItemFromCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/:userId", getAllCartItems);
router.post("/:userId", addItemsToCart);

router.post("/:userId/:productId", changeItemQuantity);
router.delete("/:userId/:productId", removeItemFromCart);

export default router;

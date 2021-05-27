import express from "express";
import {
  addItemsToWishList,
  getAllWishListItems,
  removeItemFromWishList,
} from "../controllers/wishListController.js";

const router = express.Router();

router.get("/:userId", getAllWishListItems);
router.post("/:userId", addItemsToWishList);
router.delete("/:userId/:productId", removeItemFromWishList);

export default router;

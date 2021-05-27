import express from "express";
import expressAsyncHandler from "express-async-handler";
import { CartList } from "../models/cartModel.js";
import { WishList } from "../models/wishListModel.js";
const router = express.Router();

router.get(
  "/:userId",
  expressAsyncHandler(async (req, res, next) => {
    const { userId } = req.params;

    const [cartList, wishList] = await Promise.all([
      CartList.findById(userId),
      WishList.findById(userId),
    ]);

    res.json({
      success: true,
      data: {
        cartList: cartList ? cartList.cartItems : [],
        wishList: wishList ? wishList.wishListItems : [],
      },
    });
  })
);

export default router;

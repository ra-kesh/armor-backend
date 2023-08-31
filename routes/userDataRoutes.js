import express from "express";
import expressAsyncHandler from "express-async-handler";
import { CartList } from "../models/cartModel.js";
import { WishList } from "../models/wishListModel.js";
import User from "../models/userModel.js";
const router = express.Router();

router.get(
  "/:userId",
  expressAsyncHandler(async (req, res) => {
    const { userId } = req.params;

    const [cartList, wishList, user] = await Promise.all([
      CartList.findById(userId).populate({
        path: "cartItems.product",
        select: "image",
      }),
      WishList.findById(userId).populate({
        path: "wishListItems.product",
        select: ["name", "image", "price", "inStock"],
      }),
      User.findById(userId),
    ]);

    const userProfile = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      joined: user.createdAt,
    };

    res.json({
      success: true,
      cartList: cartList ? cartList.cartItems : [],
      wishList: wishList ? wishList.wishListItems : [],
      userProfile: user ? userProfile : {},
    });
  })
);

export default router;

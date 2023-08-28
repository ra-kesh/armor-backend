import { WishList } from "../models/wishListModel.js";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";

export const getAllWishListItems = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  let wishList = await WishList.findById(userId).populate(
    "wishListItems.product"
  );
  res.status(200).json({ success: true, data: wishList });
});

export const addItemsToWishList = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { _id: productId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  let wishList = await WishList.findById(userId);

  if (!wishList) {
    const newWishlist = new WishList({
      _id: userId,
      wishListItems: [{ product: productId }],
    });
    await newWishlist.save();
    res.status(201).json({ success: true, newWishlist });
  }

  const existingItem = wishList.wishListItems.find((item) =>
    item.product.equals(productId)
  );

  if (existingItem) {
    res.json({ message: "Item alredy exists" });
  } else {
    wishList.wishListItems.push({
      product: productId,
    });
  }

  const updatedWishList = await wishList.save();

  res.status(201).json({ success: true, updatedWishList });
});

export const removeItemFromWishList = expressAsyncHandler(async (req, res) => {
  const { userId, productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  const updatedWishList = await WishList.removeWishListItem(userId, productId);

  if (!updatedWishList.nModified) {
    return res
      .status(404)
      .json({ error: "Wishlist item could not be deleted" });
  }

  res.status(200).json({ success: true });
});

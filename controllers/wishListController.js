import { WishList } from "../models/wishListModel.js";
import _ from "lodash";
import expressAsyncHandler from "express-async-handler";

export const getAllWishListItems = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  let wishList = await WishList.findById(userId).populate(
    "wishListItems.product"
  );
  res.status(200).json({ success: true, data: wishList });
});

export const addItemsToWishList = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { product } = req.body;
  let wishList = await WishList.findById(userId);

  if (!wishList) {
    const newWishlist = new WishList({
      _id: userId,
      wishListItems: [{ product: product._id }],
    });
    await newWishlist.save();
    res.status(201).json({ success: true, newWishlist });
  }

  wishList = _.extend(wishList, {
    wishListItems: _.concat(wishList.wishListItems, { product: product._id }),
  });
  await wishList.save();
  res.status(201).json({ success: true, wishList });
});

export const removeItemFromWishList = expressAsyncHandler(async (req, res) => {
  const { userId, productId } = req.params;
  let wishList = await WishList.findById(userId);
  wishList = _.extend(wishList, {
    wishListItems: _.filter(
      wishList.wishListItems,
      (item) => item.product.toString() !== productId
    ),
  });
  await wishList.save();
  res.status(200).json({ success: true, wishList });
});

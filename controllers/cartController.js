// import User from "../models/userModel";
import { CartList } from "../models/cartModel.js";
import _ from "lodash";
import expressAsyncHandler from "express-async-handler";

export const getAllCartItems = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  const cartList = await CartList.findById(userId).populate(
    "cartItems.product"
  );
  res.status(200).json({ success: true, data: cartList });
});

export const addItemsToCart = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { product } = req.body;

  let cartList = await CartList.findById(userId);

  if (!cartList) {
    const cartList = new CartList({
      _id: userId,
      cartItems: [{ product: product._id, quantity: 1 }],
    });
    await cartList.save();
    return res.status(201).json({ success: true, cartList });
  } else {
    cartList = _.extend(cartList, {
      cartItems: _.concat(cartList.cartItems, {
        product: product._id,
        quantity: 1,
      }),
    });
    await cartList.save();
    res.status(201).json({ success: true, cartList });
  }
});

export const changeItemQuantity = expressAsyncHandler(async (req, res) => {
  const { userId, productId } = req.params;
  const { quantity } = req.body;

  let cartList = await CartList.findById(userId);

  cartList = _.extend(cartList, {
    cartItems: _.map(cartList.cartItems, (item) =>
      item.product.toString() === productId
        ? _.extend(item, { quantity })
        : item
    ),
  });
  await cartList.save();
  res.status(201).json({ success: true, cartList });
});

export const removeItemFromCart = expressAsyncHandler(async (req, res) => {
  const { userId, productId } = req.params;
  let cartList = await CartList.findById(userId);
  cartList = _.extend(cartList, {
    cartItems: _.filter(
      cartList.cartItems,
      (item) => item.product.toString() !== productId
    ),
  });
  await cartList.save();
  res.status(201).json({ success: true, cartList });
});

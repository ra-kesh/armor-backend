import { CartList } from "../models/cartModel.js";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";

// export const getAllCartItems = expressAsyncHandler(async (req, res) => {
//   const { userId } = req.params;
//   const cartList = await CartList.findById(userId).populate(
//     "cartItems.product"
//   );

//   res.status(200).json({ success: true, cartList });
// });

export const addItemsToCart = expressAsyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { _id: productId, name, price, quantity } = req.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  let cartList = await CartList.findById(userId);

  if (!cartList) {
    cartList = new CartList({ _id: userId, cartItems: [] });
  }

  const existingItem = cartList.cartItems.find((item) =>
    item.product.equals(productId)
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartList.cartItems.push({
      product: productId,
      name: name,
      price: price,
      quantity: quantity,
    });
  }

  const updatedCartList = await cartList.save();

  res.status(201).json({ success: true, updatedCartList });
});

export const changeItemQuantity = expressAsyncHandler(async (req, res) => {
  const { userId, productId } = req.params;
  const { quantity } = req.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  if (quantity === 0) {
    const removedCartItem = await CartList.removeCartItem(userId, productId);

    if (!removedCartItem) {
      return res.status(404).json({ error: "Cart or item not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Item removed from cart" });
  }

  const updatedCartList = await CartList.updateCartItemQuantity(
    userId,
    productId,
    quantity
  );

  if (!updatedCartList) {
    return res.status(404).json({ error: "Cart or item not found" });
  }

  res.status(201).json({ success: true, updatedCartList });
});

export const removeItemFromCart = expressAsyncHandler(async (req, res) => {
  const { userId, productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  const updatedCart = await CartList.removeCartItem(userId, productId);

  if (!updatedCart.nModified) {
    return res.status(404).json({ error: "Cart item not found" });
  }

  return res.status(200).json({ success: true });
});

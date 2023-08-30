import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    cartItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
    indexes: [
      {
        fields: { _id: 1 },
      },
      {
        fields: { "cartItems.product": 1 },
      },
    ],
  }
);

CartSchema.statics.updateCartItemQuantity = async function (
  userId,
  productId,
  newQuantity
) {
  const CartList = this;

  const filter = {
    _id: userId,
    "cartItems.product": productId,
  };

  const update = {
    $set: { "cartItems.$.quantity": newQuantity },
  };

  const options = { new: true };

  const updatedCartList = await CartList.findOneAndUpdate(
    filter,
    update,
    options
  );

  return updatedCartList;
};

CartSchema.statics.removeCartItem = async function (userId, productId) {
  const CartList = this;

  const updatedCartList = await CartList.updateOne(
    { _id: userId },
    { $pull: { cartItems: { product: productId } } }
  );

  return updatedCartList;
};

export const CartList = mongoose.model("CartList", CartSchema);

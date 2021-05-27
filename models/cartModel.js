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
        },
        quantity: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const CartList = mongoose.model("CartList", CartSchema);

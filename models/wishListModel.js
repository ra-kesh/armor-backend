import mongoose from "mongoose";

const WishListSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    wishListItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const WishList = mongoose.model("WishList", WishListSchema);

// const mongoose = require("mongoose");

// const wishListSchema = mongoose.Schema(
//   {
//     _id: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//     wishListItems: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//       },
//     ],
//   },
//   { timestamps: true }
// );

// const WishList = mongoose.model("WishList", wishListSchema);

// module.exports = { WishList };

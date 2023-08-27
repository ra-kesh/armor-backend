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

WishListSchema.statics.removeWishListItem = async function (userId, productId) {
  const WishList = this;

  const updatedWishList = await WishList.updateOne(
    { _id: userId },
    { $pull: { wishListItems: { product: productId } } }
  );

  return updatedWishList;
};

export const WishList = mongoose.model("WishList", WishListSchema);

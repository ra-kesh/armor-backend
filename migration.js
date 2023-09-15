import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "./models/productModel.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  try {
    await setFeaturedProducts();

    mongoose.connection.close();
  } catch (error) {
    console.error("Migration error:", error);
  }
});

async function setFeaturedProducts() {
  try {
    const distinctCategories = await Product.distinct("category");

    const numberOfFeaturedProductsPerCategory = 3;

    const featuredProducts = [];

    for (const category of distinctCategories) {
      const randomProducts = await Product.aggregate([
        { $match: { category, inStock: true } },
        { $sample: { size: numberOfFeaturedProductsPerCategory } },
      ]);

      featuredProducts.push(...randomProducts);
    }

    const bulkOperations = featuredProducts.map((product) => ({
      updateOne: {
        filter: { _id: product._id },
        update: { $set: { isFeatured: true } },
      },
    }));

    const result = await Product.bulkWrite(bulkOperations);

    cconsole.log(`Updated ${result.modifiedCount} documents as featured`);
  } catch (error) {
    console.error("Error setting featured products:", error);
  }
}

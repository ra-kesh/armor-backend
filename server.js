import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./configs/db.js";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import wishListRoutes from "./routes/wishListRoutes.js";
import userDataRoutes from "./routes/userDataRoutes.js";

// import { fillProductsCollection } from "./models/productModel.js";

import {
  errorHandlerMiddleware,
  notFoundMiddleware,
} from "./middlewares/errorMiddleware.js";

import dotenv from "dotenv";
dotenv.config();

// app
const app = express();

// database
connectDB();
// fillProductsCollection();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// cors
// if (process.env.NODE_ENV === "production") {
//   app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
// }
// if (process.env.NODE_ENV === "production") {
//   app.use(cors());
// }

app.use(cors());

app.get("/", (req, res) => {
  res.send("bitch ..it's my api..");
});

// routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishListRoutes);
app.use("/api/userdata", userDataRoutes);

// error Handellers
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// port
const port = process.env.PORT || 800;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

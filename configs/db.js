import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("useFindAndModify", false);

    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: "true",
      useNewUrlParser: "true",
      useCreateIndex: "true",
    });
    console.log(`mongodb connected : ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

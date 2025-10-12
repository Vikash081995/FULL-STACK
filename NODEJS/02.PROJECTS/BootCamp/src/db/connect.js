import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb Connected")
  } catch (error) {
    console.error("MongoDb connection error", error);
    process.exit(1);
  }
};

export default connectDB;

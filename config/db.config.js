import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connnected");
  } catch (error) {
    console.error("Database connected failed", error);
  }
};
export default connectDB


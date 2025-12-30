import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connnected");
  } catch (error) {
    console.error("Database connected failed", error);
  }
};
export default connectDB


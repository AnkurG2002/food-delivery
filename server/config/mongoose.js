import mongoose from "mongoose";

export const db = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB is connected with ${connection.host}`);
  } catch (error) {
    console.log("Connection Failed" + error);
  }
};

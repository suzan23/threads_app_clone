import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (!process.env.MONGODB_URL) {
    return console.log("MONGODB_URL not found");
  }
  if (isConnected) {
    return console.log("Already connected to db");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      connectTimeoutMS: 60000,
    });
    isConnected = true;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

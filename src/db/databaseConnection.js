import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


dotenv.config({
  path: "../.env",
});

async function dbConnection() {
  try {
    const connectionDetails = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(
      `mongoDB connected successfully at : ${connectionDetails.connection.host}`
    );
  } catch (error) {
    console.log(error);
  }
}

export default dbConnection;

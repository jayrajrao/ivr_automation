import mongoose from "mongoose";
import dotenv from "dotenv";
import { log } from "../../loggers/index.js";

dotenv.config();  // Load environment variables from .env file
console.log('DB_URL:', process.env.DB_URL);

const connectDB = async () => {
  let conn;
  try {
    // Connect to MongoDB without deprecated options
    conn = await mongoose.connect(process.env.DB_URL, {
      serverApi: {
        version: "1",
        strict: true,
        deprecationErrors: true,
      },
    });

    // Log the successful connection
    log.info(
      `MongoDB Connected: ${JSON.stringify({ host: conn.connection.host })}`
    );
  } catch (error) {
    // Log any errors and exit the process
    log.error(`DB Connection Error: ${error.message}`);
    process.exit(1);
  }
  return { conn };
};

export default connectDB;


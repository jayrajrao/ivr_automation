import express from "express";
import dotenv from "dotenv";
import { connectDB, connectRedis } from "./db/index.js";
import RedisStore from "connect-redis";
import session from "express-session";
import { log } from "./loggers/index.js";
import cors from "cors";
import { corsOptionsDelegate } from "./utils/cors.js";
import { kms } from "./middlewares/kms.middleware.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { hashHandler } from "./middlewares/hash.middleware.js";
import { readHash } from "./utils/encryption/hashGen.js";

dotenv.config();

const app = express();

// Connect to MongoDB
const { conn: DB } = await connectDB();

// Connect to Redis
const { client: REDIS, store: REDIS_STORE } = connectRedis();

// Middleware setup
app.use(cors(corsOptionsDelegate));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(kms);
app.use(hashHandler);
app.use(errorHandler);

const SECRET = process.env.SESSION_SECRET || (await readHash());

// Session setup
app.use(
  session({
    secret: SECRET,
    name: "session.sid",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    store: REDIS_STORE,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("hello");
});

// Start server
app.listen(process.env.PORT || 5500, () => {
  log.info(`Server is running on port ${process.env.PORT || 5500}`);
});

// Global error handling for uncaught exceptions
process.on("uncaughtException", async (err) => {
  log.error(`Logged Error: ${err}`);
  try {
    await DB.disconnect();
  } catch (dbError) {
    log.error(`DB Disconnection Error: ${dbError.message}`);
  }
  try {
    await REDIS.quit();
  } catch (redisError) {
    log.error(`Redis Disconnection Error: ${redisError.message}`);
  }
  log.error("Redis Disconnected");
  log.error("MongoDB Disconnected");
});
  // Adjust the path based on your directory structure

  export const allowlist = ["http://localhost:3000"];
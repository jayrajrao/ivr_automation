import dotenv from "dotenv";
import { createClient } from "redis";
import { log } from "../../loggers/index.js";

dotenv.config();

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  },
  // Exclude password if not needed
  password: process.env.REDIS_PASSWORD || undefined,
});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
    log.info(`Redis Connected: ${JSON.stringify({ host: process.env.REDIS_HOST })}`);
  } catch (err) {
    log.error(`Redis Error: ${err}`);
    process.exit(1);
  }
};

export default connectRedis;


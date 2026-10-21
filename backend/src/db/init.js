import mongoose from "mongoose";

export function initDatabase() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is undefined! Global setup may have failed.");
  }
  mongoose.connection.on("open", () => {
    console.info("successfully connected to database:", DATABASE_URL);
  });
  const connection = mongoose.connect(DATABASE_URL);
  return connection;
}

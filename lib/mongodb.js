import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    // Check if we already have a connection
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in the environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Uncomment the line below if you're using Mongoose 5 or earlier
      // useCreateIndex: true,
    });

    console.log("Connected to MONGODB");
  } catch (error) {
    console.error("Error connecting to database: ", error);
    throw error; // Re-throw the error so it can be caught by the calling function
  }
};
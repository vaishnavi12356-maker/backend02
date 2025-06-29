import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // ✅ fix path here too!
// ✅ include .js extension

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nMongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("ERROR IN THE MONGO CONNECTION", error);
        process.exit(1);
    }
};

export default connectDB; // ✅ valid in ES Module

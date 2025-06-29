//index file is executed first and using node mon
//we are storing all the code in this file
//database connection code loads once we execute the index.js file

//another methdos
//create db folder file for connection code and import function it to the index file

//when we are communicating with the database there may aries issues,to handel those we need to apply try and catch approch
//database is always in the another content,we need some time to communicating and asyn await is used
//require ('dotenv').config({path: './env'})
import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index1.js"; // ✅ Correct
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});
connectDB() //asyn function is returning promise so we need to use then method to handle the promise
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection failed!!!`, err);
    process.exit(1);
  });

/*const app = express();
//ifis
(async () => {
  try {
    //connect to databse
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERROR:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:".error);
    throw error;
  }
})(); */

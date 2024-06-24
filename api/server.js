import express from "express"
import mongoose from "mongoose"
import { configDotenv } from "dotenv";
const app = express()
configDotenv()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
      console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error);
      }
}


app.listen(8000, () => {
    connect()
    console.log("Backend server is running")
})
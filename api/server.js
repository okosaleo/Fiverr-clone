import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import gigRoute from "./routes/gig.route.js"
import orderRoute from "./routes/order.route.js"
import conversationRoute from "./routes/conversation.route.js"
import messageRoute from "./routes/message.route.js"
import reviewRoute from "./routes/review.route.js"
const app = express()
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
      console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error);
      }
}


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/gig", gigRoute)
app.use("/api/order", orderRoute)
app.use("/api/conversation", conversationRoute)
app.use("/api/message", messageRoute)
app.use("/api/review", reviewRoute)

app.listen(8000, () => {
    connect()
    console.log("Backend server is running")
})
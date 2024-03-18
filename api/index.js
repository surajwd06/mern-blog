import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import useRoutes from './routes/user.route.js'

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongoose db is connected");
  })
  .catch((error) => {
    console.log(error.message);
  });
const app = express();

app.listen(3000, () => {
  console.log("Server is running is 3000 !");
});

app.use('/api/user',useRoutes)
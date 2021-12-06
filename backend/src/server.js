import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user-route.js";
import booksRouter from "./routes/book-route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const MongoDB = process.env.DB_CONNECTION || "mongodb://localhost:27017/book-tracker";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/auth", userRouter);
app.use("/", booksRouter);

// DATABASE CONNECTION SETTINGS
mongoose
  .connect(MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfuly connected to MongoDB"))
  .catch((ex) => {
    console.error(ex.message, ex);
    throw new Error("Failed attempt to connect to database");
  });

app.listen(port, () => {
  console.log(`Server is up and running on port ${port} yaay :)`);
});

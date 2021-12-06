import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user-route";
import bookRoute from "./routes/book-route";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const MongoDB = process.env.DB_CONNECTION || "mongodb://localhost:27017/book-tracker";
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/auth", userRoute);
app.use("/", bookRoute);

// DATABASE CONNECTION SETTINGS
mongoose
  .connect(MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Successfuly connected to MongoDB"))
  .catch((ex) => {
    console.error(ex.message, ex);
    throw new Error("Failed attempt to connect to database");
  });

app.listen(port, () => {
  console.log(`Server is up and running on port ${port} yaay :)`);
});

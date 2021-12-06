<<<<<<< HEAD
const express = require('express');
=======
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user-route";
import bookRoute from "./routes/book-route";
import dotenv from "dotenv";
dotenv.config();

>>>>>>> 20d4ce90cce26bc5a7f5eae0f65a93b45b7c9c79
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/user-route');
const bookRoute = require('./routes/book-route');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;
const MongoDB =
	process.env.DB_CONNECTION || 'mongodb://localhost:27017/book-tracker';
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/auth", userRoute);
app.use("/", bookRoute);

// DATABASE CONNECTION SETTINGS
mongoose
<<<<<<< HEAD
	.connect(MongoDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log('Successfuly connected to MongoDB'))
	.catch(() => {
		throw new Error('Failed attempt to connect to database');
	});
=======
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfuly connected to MongoDB"))
  .catch(() => {
    throw new Error("Failed attempt to connect to database");
  });
>>>>>>> 20d4ce90cce26bc5a7f5eae0f65a93b45b7c9c79

app.listen(port, () => {
	console.log(`Server is up and running on port ${port} yaay :)`);
});

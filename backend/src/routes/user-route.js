import express from "express";
import User from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", User.signUp);
userRouter.post("/login", User.login);

export default userRouter;

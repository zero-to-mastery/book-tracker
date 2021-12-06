import express from "express";
import controller from "../controllers/books.controller.js";

const booksRouter = express.Router();

booksRouter.post("/books", controller.addBook);
booksRouter.get("/books", controller.getAllBooks);
booksRouter.get("/books/:bookId", controller.getOneBook);
booksRouter.patch("/books/:bookId", controller.updateBook);
booksRouter.delete("/books/:bookId", controller.deleteBook);

export default booksRouter;

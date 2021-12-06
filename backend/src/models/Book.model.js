import mongoose from "mongoose";
import Joi from "joi";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 2,
      max: 255,
    },
    author: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);

export function validateBook(book) {
  const schema = Joi.object({
    title: Joi.string().trim().required().min(2).max(255),
    author: Joi.string().trim().required().min(2).max(255),
  });

  return schema.validate(book);
}

const Book = mongoose.model("Book", bookSchema);

export default Book;

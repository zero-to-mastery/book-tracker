import React, { useState, useEffect } from "react";
import { getBooks } from "../../services/default-books.service.js";
import "./AddPage.css";
import "../GridLayout/GridLayout";

const AddPage = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  useEffect(() => {
    const defaultBooks = getBooks();
    const fetchBooks = () =>
      fetch("http://localhost:5000/books")
        .then((res) => res.json())
        .then((data) => setBooks(data))
        .catch(setBooks(defaultBooks));

    fetchBooks();
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const onSubmitBook = (e) => {
    e.preventDefault();

    if(newBook.title != ""){
      const allBooks = [
        ...books,{ ...newBook },
      ];
      setBooks(allBooks);
      setNewBook({title:'', author:''})
    }

  };

  return (
    <div className="row">
      <h2 className="col-12 text-center font-weight-normal mt-3 display-4">Add Book</h2>
      <div className="col-lg-5 col-sm-12 col-xs-12 text-center book-list">
        <h2>Book's List</h2>
        <ul className="p-0 text-center">
          {books?.map((book) => {
            const url = `https://www.google.com/search?q=${book.title}%20book`;
            return (
              <li key={book.id || book.title}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {book.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-2"></div>
      <div className="col-lg-5 col-sm-12 col-xs-12 text-center add-book">
        <h2>Add Book</h2>
        <form className="col d-block" onSubmit={onSubmitBook}>
          <div className="form-group">
            <label htmlFor="title">Enter the book's title:</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              placeholder="Ex. Crime and Punishment"
              value={newBook.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Enter the book's author:</label>
            <input
              type="text"
              name="author"
              id="author"
              className="form-control"
              placeholder="Ex. Fiodor Dostoievsky"
              value={newBook.author}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </div>
  );
};
export default AddPage;

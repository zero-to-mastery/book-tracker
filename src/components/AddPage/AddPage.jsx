import React, { Component } from 'react';
import { getBooks } from '../../services/default-books.service.js';
import './AddPage.css';
import '../GridLayout/GridLayout';

class AddPage extends Component {
  state = {
    books: [],
    message: false,
  };

  componentDidMount() {
    const defaultBooks = getBooks();
    fetch('http://localhost:5000/books')
      .then((res) => res.json())
      .then((data) => this.setState({ books: data }))
      .catch(this.setState({ books: defaultBooks }));
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitBook = (e) => {
    e.preventDefault();

    console.log(e.target[0].value, e.target[1].value);

    const books = [
      ...this.state.books,
      {
        [e.target[0].name]: e.target[0].value,
        [e.target[1].name]: e.target[1].value,
      },
    ];

    this.setState({ books });
  };

  render() {
    const { books } = this.state;

    return (
      <div className='row'>
        <h2 className='col-12 text-center font-weight-normal mt-3 display-4'>
          Add Book
        </h2>
        <div className='col-5 text-center book-list'>
          <h2>Book's List</h2>
          <ul className='p-0 text-center'>
            {books.map((book) => {
              const url = `http://www.google.com/search?q=${book.title}%20book`;
              return (
                <li key={book.id || book.title}>
                  <a href={url} target='_blank' rel='noopener noreferrer'>
                    {book.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='col-2'></div>
        <div className='col-5 text-center add-book'>
          <h2>Add Book</h2>
          <form className='col d-block' onSubmit={this.onSubmitBook}>
            <div className='form-group'>
              <label htmlFor='title'>Enter the book's title:</label>
              <input
                type='text'
                name='title'
                id='title'
                className='form-control'
                placeholder='Ex. Crime and Punishment'
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='author'>Enter the book's author:</label>
              <input
                type='text'
                name='author'
                id='author'
                className='form-control'
                placeholder='Ex. Fiodor Dostoievsky'
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <button className='btn btn-success'>Add</button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddPage;

import * as actionTypes from '../actions/actionTypes';

const initialState = {
    books: [],
    wishList: []
};

const books = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_BOOK: {
            const books = state.books;
            const id = books.length > 0 ? books[books.length - 1].id + 1 : 1;
            const newBook = {
                id,
                title: action.title,
                author: action.author,
                page: action.page
            };

            return {
                ...state,
                books: books.concat([newBook])
            }
        }
        case actionTypes.EDIT_BOOK: {
            const books = state.books.slice();
            const index = books.findIndex(book => book.id === action.id);
            books[index].title = action.title;
            books[index].author = action.author;
            books[index].page = action.page;

            return {
                ...state,
                books
            }
        }
        case actionTypes.REMOVE_BOOK: {
            const books = state.books.slice();
            const index = books.findIndex(book => book.id === action.id);
            const editedList = books.splice(index, 1);

            return {
                ...state,
                books: editedList
            }
        }
        default:
            return state;
    }
};

export default books;
import * as actionTypes from './actionTypes';

export const addBook = (title, author, page) => ({
    type: actionTypes.ADD_BOOK,
    title,
    author,
    page
});

export const editBook = (id, title, author, page) => ({
    type: actionTypes.EDIT_BOOK,
    id,
    title,
    author,
    page
});

export const removeBook = id => ({
    type: actionTypes.REMOVE_BOOK,
    id
});
import * as actionTypes from './actionTypes';

export const addWish = (title, author) => ({
    type: actionTypes.ADD_WISH,
    title,
    author
});

export const editWish = (id, title, author) => ({
    type: actionTypes.EDIT_WISH,
    id,
    title,
    author
});

export const removeWish = id => ({
    type: actionTypes.REMOVE_WISH,
    id
});
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    wishList: []
};

const wishList = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_WISH: {
            const wishList = state.wishList;
            const id = wishList.length > 0 ? wishList[wishList.length - 1].id + 1 : 1;
            const newWish = {
                id,
                title: action.title,
                author: action.author
            };

            return {
                ...state,
                wishList: wishList.concat([newWish])
            }
        }
        case actionTypes.EDIT_WISH: {
            const wishList = state.wishList.slice();
            const index = wishList.findIndex(wish => wish.id === action.id);
            wishList[index].title = action.title;
            wishList[index].author = action.author;

            return {
                ...state,
                wishList
            }
        }
        case actionTypes.REMOVE_WISH: {
            const wishList = state.wishList.slice();
            const index = wishList.findIndex(wish => wish.id === action.id);
            const editedList = wishList.splice(index, 1);

            return {
                ...state,
                wishList: editedList
            }
        }
        default:
            return state;
    }
};

export default wishList;
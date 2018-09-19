import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import booksReducer from './store/reducers/books';
import wishListReducer from './store/reducers/wishList';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = process.env.NODE_ENV === 'development' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;
/* eslint-enable */
const rootReducer = combineReducers({
    books: booksReducer,
    wishList: wishListReducer
});
const store = createStore(
    rootReducer,
    composeEnhancers()
);
const baseName = process.env.NODE_ENV === 'development' ? '/' : '/book-tracker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={baseName}>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

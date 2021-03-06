import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/book';

const reducer = combineReducers({
  books: booksReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;

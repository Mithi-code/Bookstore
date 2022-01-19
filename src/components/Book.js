import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';

function Book({
  id, author, title, categories,
}) {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <li className="book-list">
        <p>{author}</p>
        <p>{title}</p>
        <p>{categories}</p>
        <button type="button" onClick={remove}>Remove</button>
      </li>
    </>
  );
}
Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
};

export default Book;

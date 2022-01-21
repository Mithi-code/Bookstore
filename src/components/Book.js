import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';

function Book({
  id, title, category,
}) {
  const dispatch = useDispatch();
  const remove = () => {
    fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vEVmNmUyYbg9MeBKBQDH/books/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: `${id}` }),
    });
    dispatch(removeBook(id));
  };
  return (
    <>
      <li className="book-list">
        <p>{title}</p>
        <p>{category}</p>
        <button type="button" onClick={remove}>Remove</button>
      </li>
    </>
  );
}
Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

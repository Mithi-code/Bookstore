import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
  const percentage = 67;

  return (
    <div className="book-cards">
      <div className="book-list">
        <p className="book-category">{category}</p>
        <p className="book-title">{title}</p>
        <button type="button" className="btn-modify">Comment</button>
        <button type="button" onClick={remove} className="btn-modify">Remove</button>
        <button type="button" className="btn-modify">Edit</button>
      </div>
      <div className="loading">
        <div className="progress-bar-c">
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({ pathColor: '#0EA5E9', marginRight: '10px' })}
            className="progress-bar"
          />
          <div className="progress-value-c">
            <p className="progress-percentage">
              {percentage}
              %
            </p>
            <p className="progress-completed">Completed</p>
          </div>
        </div>
        <div className="update-progg-c">
          <h2 className="chapter-h2">CURRENT CHAPTER</h2>
          <h3 className="chapter-h3">
            Chapter
            {' '}
            { `${Math.floor(Math.random() * 50)}`}
          </h3>
          <button type="button" className="update-progg-btn">Update Progress</button>
        </div>
      </div>
    </div>
  );
}
Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

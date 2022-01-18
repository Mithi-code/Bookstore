import React from 'react';
import PropTypes from 'prop-types';

function Book({
  id, author, title, category,
}) {
  return (
    <>
      <li>
        <p>{author}</p>
        <p>{title}</p>
        <p>{category}</p>
        <button type="button" id={id}>Remove</button>
      </li>
    </>
  );
}
Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

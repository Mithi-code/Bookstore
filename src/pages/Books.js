import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

function books() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <h2>Book List</h2>
      <Form />
      <ul>
        {books && books.map((book) => (
          <Book
            key={book.id}
            author={book.author}
            title={book.title}
            id={book.id}
            categories={book.categories}
          />
        ))}
      </ul>
    </div>
  );
}

export default books;

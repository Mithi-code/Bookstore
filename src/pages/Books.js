import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from '../components/Book';
import Form from '../components/Form';

function books() {
  const books = [
    {
      id: uuidv4(),
      author: 'mithi',
      title: 'horror',
      category: 'suspense',
    },
  ];
  return (
    <div>
      <h2>Book List</h2>
      <Form />
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            author={book.author}
            title={book.title}
            id={book.id}
            category={book.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default books;

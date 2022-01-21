import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { addBook } from '../redux/books/book';

function books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  async function getBooks() {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vEVmNmUyYbg9MeBKBQDH/books');
    const data = await response.json();
    Object.keys(data).forEach((book) => {
      const obj = data[book][0];
      obj.id = +book;
      dispatch(addBook(obj));
    });
  }
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div>
      <h2>Book List</h2>
      <Form />
      <ul>
        {books && books.map((book) => (
          <Book
            key={book.id}
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

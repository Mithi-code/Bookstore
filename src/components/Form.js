import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/book';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const obj = {
      title, category,
    };
    dispatch(addBook({ ...obj, id }));
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vEVmNmUyYbg9MeBKBQDH/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...obj, item_id: id }),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Please enter title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <br />
        <input type="text" placeholder="Please select categories" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;

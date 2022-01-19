import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/book';

function Form() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  // const categories = [Horror, Biopic, Documentry, Adventure];
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      author, title, categories, id: Date.now(),
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Plaese enter author name" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <br />
        <input type="text" placeholder="Please enter title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <br />
        <input type="text" placeholder="Please select categories" value={categories} onChange={(e) => setCategories(e.target.value)} required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;

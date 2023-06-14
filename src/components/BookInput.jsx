import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addBook } from '../redux/books/bookSlice';

const BookInput = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleAddBook = () => {
    if (title === '' || author === '' || category === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    const newBook = {
      item_id: Math.floor(Math.random() * 100),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div>
      <h4>ADD NEW BOOK</h4>
      <input
        type="text"
        placeholder="Book title"
        required
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        required
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        required
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button type="submit" onClick={handleAddBook}>Add Book</Button>
      {error && <p className="error">Please fill all the fields</p>}
    </div>
  );
};

export default BookInput;

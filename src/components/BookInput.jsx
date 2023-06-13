import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addBook } from '../redux/books/bookSlice';

const BookInput = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleAddBook = () => {
    if (title === '' || author === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    const newBook = {
      id: Math.floor(Math.random() * 100),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
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
      <Button type="submit" onClick={handleAddBook}>Add Book</Button>
      {error && <p className="error">Please fill all the fields</p>}
    </div>
  );
};

export default BookInput;

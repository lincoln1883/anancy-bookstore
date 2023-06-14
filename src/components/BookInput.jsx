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
    <div className="mt-4">
      <h2 className="text-slate-500 h-6">ADD NEW BOOK</h2>
      <input
        className="h-9 p-2 mt-2 mr-2 mb-2 bg-white border border-slate-400 rounded-md"
        type="text"
        placeholder="Book title"
        required
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="h-9 p-2 mt-2 mr-2 mb-2 bg-white border border-slate-400 rounded-md"
        type="text"
        placeholder="Author"
        required
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        className="h-9 p-2 mt-2 mr-2 mb-2 bg-white border border-slate-400 rounded-md"
        type="text"
        placeholder="Category"
        required
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button type="submit" className="bg-sky-600" onClick={handleAddBook}>Add Book</Button>
      {error && <p className="error">Please fill all the fields</p>}
    </div>
  );
};

export default BookInput;

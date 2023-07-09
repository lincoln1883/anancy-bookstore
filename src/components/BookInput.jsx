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
    <>
      <h2 className="mt-4 text-slate-500 text-2xl sm:text-start text-center">ADD NEW BOOK</h2>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 mb-4 w-full">
        <input
          className="h-10 p-2 mt-2 mr-2 mb-2 w-[75%] sm:w-[25.5%] bg-white border border-slate-400 rounded-md"
          type="text"
          placeholder="Book title"
          required
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="h-10 p-2 mt-2 mr-2 mb-2 w-[75%] sm:w-[25.5%] bg-white border border-slate-400 rounded-md"
          type="text"
          placeholder="Author"
          required
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className="h-10 p-2 mt-2 mr-2 mb-2 w-[75%] sm:w-[25.5%] bg-white border border-slate-400 rounded-md"
          type="text"
          placeholder="Category"
          required
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button type="submit" className="bg-sky-600" onClick={handleAddBook}>Add Book</Button>
      </div>
      {error && <p className="text-xl text-center font-bold text-red-600">Please fill all the fields</p>}
    </>
  );
};

export default BookInput;

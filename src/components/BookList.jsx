import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBooks,
  getAllBooks, getBooksError, getBooksStatus,
} from '../redux/books/bookSlice';
import Book from './Book';
import BookInput from './BookInput';

const BookList = () => {
  const dispatch = useDispatch();

  const book = useSelector(getAllBooks);
  const booksStatus = useSelector(getBooksStatus);
  const booksError = useSelector(getBooksError);

  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [booksStatus, dispatch]);

  return (
    <>
      <h2>BookList</h2>
      {booksStatus === 'loading' && <div>Loading...</div>}
      {booksStatus === 'success' && book.length === 0 && <div>No books available</div>}
      {booksStatus === 'success' && book.length > 0 && (
        <div>
          {book.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))}
        </div>
      )}
      {booksStatus === 'failed' && <p>{booksError}</p>}
      <BookInput />
    </>
  );
};

export default BookList;

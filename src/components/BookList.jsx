import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllBooks, getBooksError, getBooksStatus, fetchBooks,
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

  let display;

  if (booksStatus === 'loading') {
    display = <div>Loading...</div>;
  } else if (booksStatus === 'success') {
    const keys = Object.keys(book);
    if (keys.length === 0) {
      display = <div>No books available</div>;
    }
    display = keys.map((key) => (
      book[key].map((bookItem) => (
        <Book
          key={bookItem.item_id}
          book={bookItem}
        />
      ))
    ));
  } else if (booksStatus === 'failed') {
    display = <p>{booksError}</p>;
  }

  return (
    <>
      <h2>BookList</h2>
      <div>
        {display}
      </div>
      <BookInput />
    </>
  );
};

export default BookList;

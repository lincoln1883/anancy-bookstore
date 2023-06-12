import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookInput from './BookInput';

const BookList = () => {
  const book = useSelector((state) => state.books);

  return (
    <>
      <h2>BookList</h2>
      {book.books.map((book) => (
        <Book
          key={book.item_id}
          book={book}
        />
      ))}
      <BookInput />
    </>

  );
};

export default BookList;

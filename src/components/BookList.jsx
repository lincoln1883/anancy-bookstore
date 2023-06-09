import React from 'react';
import Book from './Book';
import BookInput from './BookInput';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
    },
  ];

  return (
    <>
      <h2>BookList</h2>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
      <BookInput />
    </>

  );
};

export default BookList;

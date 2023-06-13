import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ book }) => {
  console.log(book);
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    const id = book.item_id;
    dispatch(removeBook(id));
  };

  return (
    <>
      <div>
        <span>{book.title}</span>
        {' - '}
        <span>{book.author}</span>
        {' - '}
        <Button type="button" onClick={handleRemoveBook}>Remove</Button>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;

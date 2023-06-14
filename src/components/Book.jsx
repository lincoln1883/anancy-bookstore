import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div>
        <span>{title}</span>
        {' - '}
        <span>{author}</span>
        {' - '}
        <Button type="button" onClick={handleRemoveBook}>Remove</Button>
      </div>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

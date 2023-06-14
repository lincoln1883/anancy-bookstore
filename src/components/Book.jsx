import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="bg-white w-full h-40 p-5 shadow-xl">
        <p className="h-4 text-sm font-bold opacity-1 text-slate-400 mb-1 capitalize">{category}</p>
        <p className="h-7 text-2xl font-bold capitalize">{title}</p>
        <p className="h-7 text-sm font-medium capitalize text-cyan-600">{author}</p>
        <div className="flex gap-4">
          <button className=" text-cyan-600" type="button">Comments</button>
          <hr className="w-0.5 h-5 bg-slate-400" />
          <button className=" text-cyan-600" type="button" onClick={handleRemoveBook}>Remove</button>
          <hr className="w-0.5 h-5 bg-slate-400" />
          <button className="text-cyan-600" type="button">Edit</button>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <>
    <ul>
      <div key={book.id}>
        {book.title}
        <span>{book.author}</span>
        <button type="button">Remove</button>
      </div>
    </ul>
  </>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;

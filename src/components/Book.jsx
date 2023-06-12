import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <>
    <ul>
      <div key={book.item_id}>
        <span>{book.title}</span>
        {' - '}
        <span>{book.author}</span>
        {' - '}
        <button type="button">Remove</button>
      </div>
    </ul>
  </>
);

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;

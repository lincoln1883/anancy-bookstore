import React from 'react';

const BookInput = () => (
  <div>
    <h4>ADD NEW BOOK</h4>
    <form>
      <input type="text" placeholder="Book title" required />
      <input type="text" placeholder="Author" required />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default BookInput;

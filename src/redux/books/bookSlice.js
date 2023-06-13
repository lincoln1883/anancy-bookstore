import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const initialState = {
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 2,
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 3,
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`,
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;

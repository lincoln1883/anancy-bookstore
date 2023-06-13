import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const initialState = {
  status: 'idle',
  books: [],
  error: '',
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
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'success';
      state.books = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = 'failed';
      state.books = [];
      state.error = action.error;
    });
  },
});

export const getAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;

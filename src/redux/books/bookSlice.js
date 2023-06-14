import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const initialState = {
  books: [],
  status: 'idle',
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

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const itemId = Math.floor(Math.random() * 1000);
  try {
    await axios.post(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`,
      {
        item_id: itemId,
        ...book,
      },
    );
    return { item_id: itemId, ...book };
  } catch (error) {
    return error.message;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books/${id}`,
    );
    return id;
  } catch (error) {
    return error.message;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'success';
      const booksObj = action.payload;
      const bookArray = Object.keys(booksObj);
      const books = bookArray.map((id) => ({
        item_id: Number(id),
        category: booksObj[id][0].category,
        title: booksObj[id][0].title,
        author: booksObj[id][0].author,
      }));
      state.books = books;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(addBook.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.status = 'success';
      state.books.push(action.payload);
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(removeBook.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.status = 'success';
      const filteredBook = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
      state.books = filteredBook;
    });
    builder.addCase(removeBook.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const getAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export default bookSlice.reducer;
export const { addNewBook, removeOneBook } = bookSlice.actions;

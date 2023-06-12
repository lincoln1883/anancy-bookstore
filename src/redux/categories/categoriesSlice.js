import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: (state) => {
      state.categories = 'Under Construction';
    },
  },
});

export default categoriesSlice.reducer;
export const { getCategories } = categoriesSlice.actions;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: []
};

export const getCategories = createAsyncThunk('category', async () => {

  const response = await fetch("http://127.0.0.1:8000/en/products/categories/");
  const data = await response.json();
  return data;
});



const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })

  },
});

export default categorySlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getAllMakes } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  makes: [],
};

const makesSlice = createSlice({
  name: 'makes',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getAllMakes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllMakes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.makes = action.payload;
      })
      .addCase(getAllMakes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const makesReducer = makesSlice.reducer;

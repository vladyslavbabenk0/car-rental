import { createSlice } from '@reduxjs/toolkit';
import { getAllCars, getFirstCars } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  firstAdverts: [],
  adverts: [],
  filteredAdverts: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilteredAdverts(state, action) {
      state.filteredAdverts = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = action.payload;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getFirstCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFirstCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.firstAdverts = action.payload;
      })
      .addCase(getFirstCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilteredAdverts } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

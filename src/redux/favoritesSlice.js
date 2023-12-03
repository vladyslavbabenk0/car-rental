import { createSlice } from '@reduxjs/toolkit';
import { addToFavorites, deleteFromFavorites } from './operations';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(addToFavorites, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(deleteFromFavorites, (state, action) => {
        const favId = action.payload.id;
        state.favorites = state.favorites.filter(
          (favorite) => favorite.id !== favId
        );
      }),
});

export const favoritesReducer = favoritesSlice.reducer;

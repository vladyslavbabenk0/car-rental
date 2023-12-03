import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://656b1225dac3630cf727a347.mockapi.io/',
});

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/adverts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFirstCars = createAsyncThunk(
  'cars/getFirstCars',
  async (_, thunkAPI) => {
    try {
      const page = 1;
      const limit = 12;
      const response = await instance.get(
        `/adverts?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllMakes = createAsyncThunk(
  'filter/getAllMakes',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/makes');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorites = createAction('favorites/addToFavorites');

export const deleteFromFavorites = createAction(
  'favorites/deleteFromFavorites'
);

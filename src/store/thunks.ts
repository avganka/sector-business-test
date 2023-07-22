import axios from 'axios';
import {Post} from '../types/post.types';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('fetchPosts', async (_, thunkAPI) => {
  try {
    const {data} = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return data;
  } catch (error) {
    if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
  }
});

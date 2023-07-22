import {Post} from '../types/post.types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {SearchParams, getPostsWithParams} from '../api/api.routes';
import {api} from '../api/api.config';

export const fetchPosts = createAsyncThunk('fetchPosts', async (params: SearchParams, thunkAPI) => {
  try {
    const res = await api.get<Post[]>(getPostsWithParams(params));
    return {
      posts: res.data,
      total: res.headers['x-total-count'] || res.data.length,
    };
  } catch (error) {
    if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
  }
});

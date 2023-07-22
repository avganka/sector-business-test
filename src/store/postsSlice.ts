import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Post} from '../types/post.types';
import {fetchPosts} from './thunks';

interface PostsState {
  posts: Post[];
  totalPosts: number;
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  totalPosts: 0,
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending.type, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPosts.fulfilled.type,
        (state, action: PayloadAction<{posts: Post[]; total: number}>) => {
          state.loading = false;
          state.error = null;
          state.posts = action.payload.posts;
          state.totalPosts = action.payload.total;
        }
      )
      .addCase(fetchPosts.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

//export const {fetchPostsRequest, fetchPostsSuccess, fetchPostsError} = postsSlice.actions;
export default postsSlice.reducer;

import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Post} from '../types/post.types';
import {fetchPosts} from './thunks';

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
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
      .addCase(fetchPosts.fulfilled.type, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

//export const {fetchPostsRequest, fetchPostsSuccess, fetchPostsError} = postsSlice.actions;
export default postsSlice.reducer;

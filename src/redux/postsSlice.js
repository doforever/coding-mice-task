import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { history } from '../App.js';

const initialState = {
  value: [],
  status: 'idle',
};

/* Selectors */

export const selectAll = (state) => state.posts.value;
export const selectById = (state, id) => state.posts.value.find(post => post.id.toString() === id);
export const selectStatus = (state) => state.posts.status;
export const selectCurrent = (state) => state.posts.current;

/* Thunk creators */

export const fetchAll = createAsyncThunk(
  'posts/fetchAll',
  async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return res.data;
  }
);

export const addRequest = createAsyncThunk(
  'posts/addRequest',
  async (postData) => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, postData);
    return res.data;
  }
);

export const removeRequest = createAsyncThunk(
  'posts/removeRequest',
  async (id) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.data.id;
  }
);

export const updateRequest = createAsyncThunk(
  'posts/updateRequest',
  async (postData) => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postData.id}`, postData);
    history.push(`/post/${postData.id}`);
    return res.data;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  /* Generate actions */
  reducers: {
    
  },
  /* Handle actions generated by createAsyncThunk or in other slices. */
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(addRequest.pending, (state) => {
        state.status = 'saving';
      })
      .addCase(addRequest.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value.push(action.payload);
      })
      .addCase(removeRequest.pending, (state) => {
        state.status = 'removing';
      })
      .addCase(removeRequest.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = state.value.filter(post => post.id !== action.payload);
      })
      .addCase(updateRequest.pending, (state) => {
        state.status = 'updating';
      })
      .addCase(updateRequest.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = state.value.map(post => post.id === action.payload.id ? action.payload : post);
      });
  },
});

export const { setCurrent } = postsSlice.actions;


export default postsSlice.reducer;

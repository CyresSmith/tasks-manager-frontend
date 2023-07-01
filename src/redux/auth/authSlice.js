import { createAction, createSlice } from '@reduxjs/toolkit';

import { register, login, logout, getCurrentUser } from './authOperations';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isError = true;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isError = true;
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const auth = authSlice.reducer;

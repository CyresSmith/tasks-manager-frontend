import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosBaseQuery, {
  setAuthHeader,
  clearAuthHeader,
} from 'redux/axiosBaseQuery';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await axiosBaseQuery({
        url: '/auth/register',
        method: 'POST',
        data,
      });

      if (res.error) {
        throw new Error(res.error.data.message);
      }

      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await axiosBaseQuery({
        url: '/auth/login',
        method: 'POST',
        data,
      });

      if (res.error) {
        throw new Error(res.error.data.message);
      }

      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axiosBaseQuery({
        url: '/auth/logout',
        method: 'POST',
      });

      if (res.error) {
        throw new Error(res.error.data.message);
      }

      clearAuthHeader();

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, dispatch, getState }) => {
    const { token } = getState().auth;

    if (!token) {
      return rejectWithValue('No valid token');
    }

    setAuthHeader(token);

    try {
      const res = await axiosBaseQuery({
        url: '/auth/current',
        method: 'GET',
      });

      if (res.error) {
        throw new Error(res.error.data.message);
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

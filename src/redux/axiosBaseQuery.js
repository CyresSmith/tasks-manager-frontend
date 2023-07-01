import axios from 'axios';

import store from './store';

// export const baseUrl = 'https://delivery-app-backend-siau.onrender.com';
axios.defaults.baseURL = 'http://localhost:3000';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const axiosBaseQuery = async queryParams => {
  try {
    const result = await axios(queryParams);
    return { data: result.data };
  } catch (axiosError) {
    let err = axiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};

export default axiosBaseQuery;

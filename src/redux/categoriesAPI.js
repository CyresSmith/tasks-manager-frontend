import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const categoriesAPI = createApi({
  reducerPath: 'categoriesAPI',

  baseQuery: axiosBaseQuery,

  tagTypes: ['categoriesAPI'],

  endpoints: builder => ({
    createCategory: builder.mutation({
      query: data => ({
        url: '/categories',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['categoriesAPI'],
    }),

    getAllCategories: builder.query({
      query: () => ({
        url: '/categories',
        method: 'GET',
      }),
      invalidatesTags: ['categoriesAPI'],
    }),

    getCategoryById: builder.query({
      query: id => ({
        url: `/categories/${id}`,
        method: 'GET',
      }),
      providesTags: ['categoriesAPI'],
    }),

    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        data,
      }),
      invalidatesTags: ['categoriesAPI'],
    }),

    deleteCategory: builder.mutation({
      query: id => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['categoriesAPI'],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesAPI;

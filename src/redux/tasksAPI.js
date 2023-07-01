import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const tasksAPI = createApi({
  reducerPath: 'tasksAPI',

  baseQuery: axiosBaseQuery,

  tagTypes: ['tasksAPI'],

  endpoints: builder => ({
    createTask: builder.mutation({
      query: data => ({
        url: '/tasks',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['tasksAPI'],
    }),

    getAllTasks: builder.query({
      query: category => ({
        url: '/tasks',
        method: 'GET',
        params: { category },
      }),
      invalidatesTags: ['tasksAPI'],
    }),

    getTaskById: builder.query({
      query: id => ({
        url: `/tasks/${id}`,
        method: 'GET',
      }),
      providesTags: ['tasksAPI'],
    }),

    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        data,
      }),
      invalidatesTags: ['tasksAPI'],
    }),

    deleteTask: builder.mutation({
      query: id => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['tasksAPI'],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetAllTasksQuery,
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksAPI;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().users;
      headers.set('Authorization', token);
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getUserLogin: builder.mutation({
      query: payload => ({
        url: `/login`,
        method: 'POST',
        body: payload,
      }),
      providesTags: ['User'],
    }),
    getSignup: builder.mutation({
      query: payload => ({
        url: `/signup`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['user'],
    }),
    getCurrentUser: builder.query({
      query: () => `/current`,
    }),
    getLogout: builder.mutation({
      query: payload => ({
        url: `/logout`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useGetSignupMutation,
  useGetUserLoginMutation,
  useGetCurrentUserQuery,
  useGetLogoutMutation,
} = userApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/auth/users',
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.users.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
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
      invalidatesTags: ['User'],
    }),
    getSignup: builder.mutation({
      query: payload => ({
        url: `/register`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    getCurrentUser: builder.query({
      query: () => `/current`,
      providesTags: ['User'],
    }),
    getLogout: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: 'GET',
      }),
    }),
    updateUserAvatar: builder.mutation({
      query: payload => ({
        url: '/avatars',
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    updateUserCurrent: builder.mutation({
      query: payload => ({
        url: '/current',
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetSignupMutation,
  useGetUserLoginMutation,
  useGetCurrentUserQuery,
  useGetLogoutMutation,
  useUpdateUserAvatarMutation,
  useUpdateUserCurrentMutation,
} = userApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const userApi = createApi({
//   reducerPath: 'userApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/users',
//     prepareHeaders: (headers, { getState }) => {
//       const { token = '' } = getState().users;
//       headers.set('Authorization', token);
//       return headers;
//     },
//   }),
//   tagTypes: ['User'],
//   endpoints: builder => ({
//     getUserLogin: builder.mutation({
//       query: payload => ({
//         url: `/login`,
//         method: 'POST',
//         body: payload,
//       }),
//       providesTags: ['User'],
//     }),
//     getSignup: builder.mutation({
//       query: payload => ({
//         url: `/signup`,
//         method: 'POST',
//         body: payload,
//       }),
//       invalidatesTags: ['user'],
//     }),
//     getCurrentUser: builder.query({
//       query: () => `/current`,
//     }),
//     getLogout: builder.mutation({
//       query: payload => ({
//         url: `/logout`,
//         method: 'POST',
//         body: payload,
//       }),
//       invalidatesTags: ['user'],
//     }),
//   }),
// });

// export const {
//   useGetSignupMutation,
//   useGetUserLoginMutation,
//   useGetCurrentUserQuery,
//   useGetLogoutMutation,
// } = userApi;

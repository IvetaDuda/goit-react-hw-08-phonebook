import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://phonebook-server-h3zp.onrender.com/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.users.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
      providesTags: ['contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contact'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['contact'],
    }),
    patchContact: builder.mutation({
      query: ({ _id, ...patch }) => ({
        url: `/contacts/${_id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  usePatchContactMutation,
} = contactsApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//     prepareHeaders: (headers, { getState }) => {
//       const { token = '' } = getState().users;
//       headers.set('Authorization', token);
//       return headers;
//     },
//   }),
//   tagTypes: ['contact'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => ({
//         url: `/contacts`,
//         method: 'GET',
//       }),
//       providesTags: ['contact'],
//     }),
//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['contact'],
//     }),
//     createContact: builder.mutation({
//       query: newContact => ({
//         url: `/contacts`,
//         method: 'POST',
//         body: newContact,
//       }),
//       invalidatesTags: ['contact'],
//     }),
//     patchContact: builder.mutation({
//       query: ({ id, ...patch }) => ({
//         url: `/contacts/${id}`,
//         method: 'PATCH',
//         body: patch,
//       }),
//       invalidatesTags: ['contact'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useDeleteContactMutation,
//   useCreateContactMutation,
//   usePatchContactMutation,
// } = contactsApi;

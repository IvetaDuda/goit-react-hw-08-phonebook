import { createSlice } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      contactsApi.endpoints.patchContact.matchFulfilled,
      (state, { payload }) => {
        state.value = state.value.map(contact => {
          console.log(payload);
          return contact.id === payload.id ? payload : contact;
        });
      }
    );
  },
});

export const ReducerFilter = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;

///Selectors///

export const getFilter = state => state.filter.value;

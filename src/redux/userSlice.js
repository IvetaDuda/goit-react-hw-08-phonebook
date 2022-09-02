import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

const initialState = {
  name: '',
  email: '',
  token: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getLogin(state, { payload }) {
      const { user, token } = payload;
      state.email = user.email;
      state.name = user.name;
      state.token = token;
      state.isLoggedIn = true;
    },
    getCurrentLogin(state, { payload }) {
      state.email = payload.users.email;
      state.name = payload.users.name;
      state.isLoggedIn = true;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.getSignup.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        state.email = user.email;
        state.name = user.name;
        state.token = token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      userApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.email;
        state.name = payload.name;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(userApi.endpoints.getLogout.matchFulfilled, state => {
      state.email = initialState.email;
      state.name = initialState.name;
      state.token = initialState.token;
      state.isLoggedIn = false;
    });
  },
});

export const ReducerUser = userSlice.reducer;

export const { getCurrentLogin, getLogin } = userSlice.actions;

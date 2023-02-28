import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

const initialState = {
  name: '',
  email: '',
  token: '',
  userPhone: '',
  userBirthday: '',
  avatarURL: null,
  isLoggedIn: false,
  errorServer: false,
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
      state.avatarURL = user.avatarURL;
      state.userPhone = user.userPhone;
      state.userBirthday = user.userBirthday;
      state.errorServer = false;
    },
    getCurrentLogin(state, { payload }) {
      state.email = payload.users.email;
      state.name = payload.users.name;
      state.avatarURL = payload.users.avatarURL;
      state.userPhone = payload.users.userPhone;
      state.userBirthday = payload.users.userBirthday;
      state.isLoggedIn = true;
      state.errorServer = false;
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
        state.avatarURL = user.avatarURL;
        state.userPhone = user.userPhone;
        state.userBirthday = user.userBirthday;
        state.isLoggedIn = true;
        state.errorServer = false;
      }
    );
    builder.addMatcher(
      userApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.email;
        state.name = payload.name;
        state.avatarURL = payload.avatarURL;
        state.userPhone = payload.userPhone;
        state.userBirthday = payload.userBirthday;
        state.isLoggedIn = true;
        state.errorServer = false;
      }
    );
    builder.addMatcher(
      userApi.endpoints.updateUserCurrent.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.email;
        state.name = payload.name;
        state.avatarURL = payload.avatarURL;
        state.userPhone = payload.userPhone;
        state.userBirthday = payload.userBirthday;
        state.isLoggedIn = true;
        state.errorServer = false;
      }
    );
    builder.addMatcher(
      userApi.endpoints.updateUserCurrent.matchRejected,
      (state, { payload }) => {
        if (payload?.status === 400) {
          state.errorServer = true;
          state.isLoggedIn = false;
        }
      }
    );

    builder.addMatcher(userApi.endpoints.getLogout.matchFulfilled, () => {
      return { ...initialState };
    });
    builder.addMatcher(userApi.endpoints.getLogout.matchRejected, () => {
      return { ...initialState };
    });
    builder.addMatcher(userApi.endpoints.getLogout.matchPending, state => {
      state.isLoggedIn = false;
      state.errorServer = true;
    });
  },
});

export const ReducerUser = userSlice.reducer;

export const { getCurrentLogin, getLogin } = userSlice.actions;

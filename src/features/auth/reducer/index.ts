import { createSlice } from '@reduxjs/toolkit';

import { api } from '../../../services';
import { authenticateUser } from './thunks';
import { AuthState } from './types';

export const INITIAL_STATE: AuthState = {
  user: '',
  timestamp: '',
  workDirectory: '',
  token: '',
  status: 'idle',
  isAuthenticated: false,
  error: undefined,
};

export const authSlice = createSlice({
  name: '@auth',
  initialState: INITIAL_STATE,
  reducers: {
    logout: () => INITIAL_STATE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (draft) => {
        draft.status = 'loading';
        draft.error = '';
      })
      .addCase(authenticateUser.fulfilled, (draft, { payload }) => {
        draft.status = 'successful';
        draft.isAuthenticated = true;
        draft.user = payload.user;
        draft.timestamp = payload.timestamp;
        draft.workDirectory = payload.workDirectory;
        draft.token = payload.token;

        api.defaults.headers = {
          ...api.defaults.headers,
          Authorization: `Bearer ${payload.token}`,
        };
      })
      .addCase(authenticateUser.rejected, (draft, action) => {
        draft.status = 'failed';

        draft.error = action.payload?.error.message;
      });
  },
});

export const authActions = { ...authSlice.actions, authenticateUser };

export const authReducer = authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import { authenticateUser } from './thunks';
import { AuthState } from './types';

export const INITIAL_STATE: AuthState = {
  user: '',
  timestamp: '',
  workDirectory: '',
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
      })
      .addCase(authenticateUser.fulfilled, (draft, { payload }) => {
        draft.status = 'successful';
        draft.isAuthenticated = true;
        draft.user = payload.user;
        draft.timestamp = payload.timestamp;
        draft.workDirectory = payload.workDirectory;
      })
      .addCase(authenticateUser.rejected, (draft, action) => {
        draft.status = 'failed';

        draft.error = action.payload?.error.message;
      });
  },
});

export const authActions = { ...authSlice.actions, authenticateUser };

export const authReducer = authSlice.reducer;

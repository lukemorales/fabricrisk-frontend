import { RootState } from '../../../../store';

export const selectAuthState = (state: RootState) => state.auth;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectAuthStatus = (state: RootState) => state.auth.status;

export const selectAuthenticatedData = (state: RootState) => ({
  user: state.auth.user,
  timestamp: state.auth.timestamp,
});

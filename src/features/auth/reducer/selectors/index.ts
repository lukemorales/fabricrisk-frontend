import { RootState } from '../../../../app/store';

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectAuthStatus = (state: RootState) => state.auth.status;

export const selectAuthenticatedData = (state: RootState) => ({
  user: state.auth.user,
  timestamp: state.auth.timestamp,
  workDirectory: state.auth.workDirectory,
});

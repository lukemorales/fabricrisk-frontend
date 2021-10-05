import { PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from './types';
import { LoginResponsePayload } from '../types';

import { authActions, authReducer } from '.';

describe('auth | reducer', () => {
  let result: AuthState;

  const initialState: AuthState = {
    isAuthenticated: false,
    status: 'idle',
    timestamp: '',
    user: '',
    workDirectory: '',
  };

  it('returns the initial state', async () => {
    result = authReducer(undefined, { type: 'unknown' });

    expect(result).toEqual<AuthState>(initialState);
  });

  it('resets the state on logout action dispatch', async () => {
    const futureState: AuthState = {
      isAuthenticated: true,
      status: 'idle',
      user: 'John Doe',
      timestamp: new Date().toISOString(),
      workDirectory: 'work-directory/fake',
    };

    result = authReducer(futureState, authActions.logout);

    expect(result).toEqual<AuthState>(initialState);
  });

  it('sets loading to true when authenticating user', async () => {
    result = authReducer(initialState, authActions.authenticateUser.pending);

    expect(result).toEqual<AuthState>({
      ...initialState,
      status: 'loading',
    });
  });

  it('sets status to "failed" when authenticating user has failed', async () => {
    const rejectedAction = authActions.authenticateUser.rejected(
      null,
      'mocked-request-id',
      {
        username: '',
        password: '',
      },
      {
        error: {
          message: 'Invalid credentials',
        },
      },
    );

    result = authReducer(initialState, rejectedAction);

    expect(result).toEqual<AuthState>({
      ...initialState,
      status: 'failed',
      error: 'Invalid credentials',
    });
  });

  it('sets user and timestamp information when authenticating user is fullfiled', async () => {
    const action: PayloadAction<LoginResponsePayload> = {
      type: authActions.authenticateUser.fulfilled.type,
      payload: {
        timestamp: 'fake-timestamp',
        user: 'fake-user',
        workDirectory: 'fake/work-directory',
      },
    };

    result = authReducer(initialState, action);

    expect(result).toEqual<AuthState>({
      status: 'successful',
      isAuthenticated: true,
      user: 'fake-user',
      timestamp: 'fake-timestamp',
      workDirectory: 'fake/work-directory',
    });
  });
});

import { PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from './types';
import { LoginResponsePayload } from '../types';

import { authActions, authReducer, INITIAL_STATE } from '.';

describe('auth | reducer', () => {
  let result: AuthState;

  it('returns the initial state', async () => {
    result = authReducer(undefined, { type: 'unknown' });

    expect(result).toEqual<AuthState>(INITIAL_STATE);
  });

  it('resets the state on logout action dispatch', async () => {
    const futureState: AuthState = {
      isAuthenticated: true,
      status: 'idle',
      user: 'John Doe',
      token: 'fake-bearer-token',
      timestamp: new Date().toISOString(),
      workDirectory: 'work-directory/fake',
    };

    result = authReducer(futureState, authActions.logout);

    expect(result).toEqual<AuthState>(INITIAL_STATE);
  });

  it('sets loading to true when authenticating user', async () => {
    result = authReducer(INITIAL_STATE, authActions.authenticateUser.pending);

    expect(result).toEqual<AuthState>({
      ...INITIAL_STATE,
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
        status: 401,
        error: {
          message: 'Invalid credentials',
        },
      },
    );

    result = authReducer(INITIAL_STATE, rejectedAction);

    expect(result).toEqual<AuthState>({
      ...INITIAL_STATE,
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
        token: 'fake-token',
      },
    };

    result = authReducer(INITIAL_STATE, action);

    expect(result).toEqual<AuthState>({
      status: 'successful',
      isAuthenticated: true,
      user: 'fake-user',
      timestamp: 'fake-timestamp',
      token: 'fake-token',
      workDirectory: 'fake/work-directory',
    });
  });
});

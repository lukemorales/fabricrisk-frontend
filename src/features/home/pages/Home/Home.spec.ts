import { PayloadAction } from '@reduxjs/toolkit';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { store } from '../../../../app/store';
import { renderFabricRisk } from '../../../../utils/tests';
import { authActions } from '../../../auth/reducer';
import { LoginResponsePayload } from '../../../auth/types';

describe('auth | pages | <Login />', () => {
  beforeEach(() => {
    renderFabricRisk();

    const authenticatedAction: PayloadAction<LoginResponsePayload> = {
      type: authActions.authenticateUser.fulfilled.type,
      payload: {
        user: 'fake-user',
        timestamp: '2021-10-05T15:28:43.551',
        workDirectory: 'fake/work-directory',
      },
    };

    store.dispatch(authenticatedAction);
  });

  it('renders the home page with data stored in redux', async () => {
    expect(
      await screen.findByRole('heading', { name: /home page/i }),
    ).toBeVisible();

    expect(screen.getByText(/welcome, fake-user!/i)).toBeVisible();
    expect(
      screen.getByText(
        /the last time your credentials were authenticated was on tuesday, october 5, 2021\./i,
      ),
    ).toBeVisible();
    expect(
      screen.getByText(
        /This application is running on fake\/work-directory\./i,
      ),
    ).toBeVisible();
  });

  it('logs user out of the application when clicking the logout button', async () => {
    expect(
      await screen.findByRole('heading', { name: /home page/i }),
    ).toBeVisible();

    userEvent.click(screen.getByRole('button', { name: /logout/i }));

    expect(await screen.findByTestId('login-page')).toBeVisible();

    expect(store.getState().auth.isAuthenticated).toBeFalsy();
  });
});

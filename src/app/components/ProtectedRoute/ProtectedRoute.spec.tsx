import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../../utils/tests';
import { store } from '../../store';
import { authActions } from '../../../features/auth/reducer';

import { ProtectedRoute } from '.';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <div data-testid="login-page">Route not displayed</div>,
}));

describe('components | <ProtectedRoute />', () => {
  const renderProtectedRoute = () =>
    renderWithProviders(
      <ProtectedRoute>
        <div>This is a protected page</div>
      </ProtectedRoute>,
    );

  it('navigates to the login page if user is not authenticated', async () => {
    renderProtectedRoute();

    expect(screen.getByTestId('login-page')).toBeVisible();
  });

  it('renders the page if user is authenticated', async () => {
    const { rerender } = renderProtectedRoute();

    store.dispatch({
      type: authActions.authenticateUser.fulfilled.type,
      payload: {
        user: 'mocked user',
        timestamp: 'mocked-timestamp',
      },
    });

    rerender(
      <ProtectedRoute>
        <div>This is a protected page</div>
      </ProtectedRoute>,
    );

    expect(screen.getByText(/this is a protected page/i)).toBeVisible();
  });
});

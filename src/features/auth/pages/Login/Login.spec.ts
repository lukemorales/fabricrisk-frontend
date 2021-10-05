import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderFabricRisk } from '../../../../utils/tests';

describe('auth | pages | <Login />', () => {
  beforeEach(() => {
    renderFabricRisk({ path: '/login' });
  });

  it('renders the login page correctly', async () => {
    expect(screen.getByRole('heading', { name: /login page/i })).toBeVisible();

    expect(screen.getByRole('textbox', { name: /username/i })).toBeVisible();
    expect(screen.getByLabelText(/password/i)).toBeVisible();

    expect(screen.getByRole('button', { name: /login/i })).toBeVisible();
  });

  it('shows errors when required inputs are not valid', async () => {
    userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(
      await screen.findByText(/fill your username credentials/i),
    ).toBeVisible();

    expect(
      screen.getByText(/you must provide a password to authenticate/i),
    ).toBeVisible();
  });

  it('renders an error message if backend credentials are not valid', async () => {
    userEvent.type(
      screen.getByRole('textbox', { name: /username/i }),
      'invalid-username',
    );
    userEvent.type(screen.getByLabelText(/password/i), 'invalid-password');

    userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(
      await screen.findByText(
        /invalid credentials, please verify the provided information and try again/i,
      ),
    ).toBeVisible();
  });

  it('successfully authenticates and redirects to home page', async () => {
    userEvent.type(
      screen.getByRole('textbox', { name: /username/i }),
      process.env.REACT_APP_VALID_USERNAME,
    );

    userEvent.type(
      screen.getByLabelText(/password/i),
      process.env.REACT_APP_VALID_PASSWORD,
    );

    const button = screen.getByRole('button', { name: /login/i });

    userEvent.click(button);

    await waitFor(() => {
      expect(button).toHaveTextContent('Authenticating...');
    });

    await waitFor(() => {
      expect(button).toHaveTextContent('Authenticated');
    });

    expect(await screen.findByText(/home page/i)).toBeVisible();
    expect(window.location.pathname).toBe('/');
  });
});

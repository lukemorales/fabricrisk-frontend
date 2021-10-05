import { useEffect } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { authSchema } from './schema';
import { Input } from '../../../../components';
import { useFabricDispatch, useFabricSelector } from '../../../../app/store';
import { authActions } from '../../reducer';
import { LoginRequestBody } from '../../types';
import {
  selectAuthError,
  selectAuthStatus,
  selectIsAuthenticated,
} from '../../reducer/selectors';
import { AuthState } from '../../reducer/types';

const BUTTON_TEXTS: Record<AuthState['status'], string> = {
  idle: 'Login',
  loading: 'Authenticating...',
  failed: 'Login',
  successful: 'Authenticated',
};

export const Login = () => {
  const navigate = useNavigate();

  const dispatch = useFabricDispatch();
  const serverError = useFabricSelector(selectAuthError);
  const authStatus = useFabricSelector(selectAuthStatus);
  const isAuthenticated = useFabricSelector(selectIsAuthenticated);

  const formMethods = useForm({
    resolver: yupResolver(authSchema),
  });

  const handleSubmit = (fields: LoginRequestBody) => {
    dispatch(authActions.authenticateUser(fields));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div data-testid="login-page">
      <FormProvider {...formMethods}>
        <h1>Login Page</h1>

        {serverError && <p>{serverError}</p>}

        <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
          <Input
            required
            name="username"
            placeholder="Type your username"
            label="Username"
          />

          <Input
            required
            name="password"
            placeholder="Type your password"
            type="password"
            label="Password"
          />

          <button type="submit">{BUTTON_TEXTS[authStatus]}</button>
        </form>
      </FormProvider>
    </div>
  );
};

import { PropsWithChildren } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { selectIsAuthenticated } from '../../../features/auth/reducer/selectors';
import { useFabricSelector } from '../../store';

export const ProtectedRoute = ({ children }: PropsWithChildren<unknown>) => {
  const location = useLocation();

  const isAuthenticated = useFabricSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

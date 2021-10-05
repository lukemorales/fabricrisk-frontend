import { RouteObject } from 'react-router';

import { Login } from './pages/Login';

export const authRoutes: RouteObject[] = [
  {
    path: 'login',
    element: <Login />,
  },
];

import { RouteObject } from 'react-router';

import { ProtectedRoute } from '../../app/components';
import { Home } from './pages/Home';

export const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
];

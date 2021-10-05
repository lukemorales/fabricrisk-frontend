import { RouteObject } from 'react-router';

import { authRoutes } from '../../features/auth';

export const routes: RouteObject[] = [authRoutes].flat();

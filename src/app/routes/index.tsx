/* eslint-disable radar/prefer-immediate-return */
import { RouteObject, useRoutes } from 'react-router';

import * as S from './styles';
import { authRoutes } from '../../features/auth';
import { homeRoutes } from '../../features/home';

const routes: RouteObject[] = [homeRoutes, authRoutes].flat();

export const AppRoutes = () => {
  const route = useRoutes(routes);

  return <S.Container>{route}</S.Container>;
};

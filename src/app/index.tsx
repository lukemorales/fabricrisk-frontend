import { Providers } from './components';
import { AppRoutes } from './routes';
import { globalStyles } from '../styles';

export const App = () => {
  globalStyles();

  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
};

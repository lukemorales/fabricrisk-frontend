import { PropsWithChildren } from 'react';

import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from '../../store';

export const Providers = ({ children }: PropsWithChildren<unknown>) => (
  <Router>
    <StoreProvider store={store}>{children}</StoreProvider>
  </Router>
);

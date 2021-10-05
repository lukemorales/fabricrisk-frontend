import { PropsWithChildren } from 'react';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { persistor, store } from '../../store';

export const Providers = ({ children }: PropsWithChildren<unknown>) => (
  <Router>
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </StoreProvider>
  </Router>
);

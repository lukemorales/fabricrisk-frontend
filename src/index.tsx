import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { IS_MSW_ENABLED } from './constants';
import { store } from './store';

if (IS_MSW_ENABLED) {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const { worker } = require('./mocks');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

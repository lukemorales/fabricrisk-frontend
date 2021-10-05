import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IS_MSW_ENABLED } from './constants';
import { App } from './app';

if (IS_MSW_ENABLED) {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const { worker } = require('./mocks');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

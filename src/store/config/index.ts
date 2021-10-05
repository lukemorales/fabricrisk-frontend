import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '../../features/auth/reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

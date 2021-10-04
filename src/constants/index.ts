export const IS_DEV = process.env.NODE_ENV === 'development';

export const IS_MSW_ENABLED =
  IS_DEV && process.env.REACT_APP_MSW_ENABLED === 'true';

export const API_BASE_URL =
  process.env.REACT_APP_BASE_URL || 'http://localhost:3333';

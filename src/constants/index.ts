export const IS_DEV = process.env.NODE_ENV === 'development';

export const IS_MSW_ENABLED =
  IS_DEV && process.env.REACT_APP_MSW_ENABLED === 'true';

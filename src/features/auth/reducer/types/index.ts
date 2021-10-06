export type AuthState = {
  user: string;
  timestamp: string;
  workDirectory: string;
  token: string;
  status: 'idle' | 'loading' | 'successful' | 'failed';
  isAuthenticated: boolean;
  error?: string;
};

export type AuthState = {
  user: string;
  timestamp: string;
  status: 'idle' | 'loading' | 'failed';
  isAuthenticated: boolean;
  error?: string;
};

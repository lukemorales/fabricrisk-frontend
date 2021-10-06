export type LoginRequestBody = Record<'username' | 'password', string>;

export type LoginResponsePayload = Record<
  'user' | 'timestamp' | 'workDirectory' | 'token',
  string
>;

import { rest } from 'msw';

import { LoginRequestBody } from '../types';

export const handlers = [
  rest.post<LoginRequestBody>('/login', (req, res, ctx) => {
    const { username, password } = req.body;

    const validUsername = 'Talagent';
    const validPassword = 'password1';

    const isValidAuthentication =
      username === validUsername && password === validPassword;

    if (!isValidAuthentication) {
      return res(
        ctx.status(401),
        ctx.json({
          message:
            'Invalid credentials, please verify the provided information and try again',
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        user: validUsername,
        date: new Date().toISOString(),
      }),
    );
  }),
];

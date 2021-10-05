import { rest } from 'msw';

import { ApiRequest } from '../../../types';
import { LoginRequestBody, LoginResponsePayload } from '../types';

export const authHandlers = [
  rest.post<LoginRequestBody, ApiRequest<LoginResponsePayload>>(
    '/login',
    (req, res, ctx) => {
      const { username, password } = req.body;

      const isValidAuthentication =
        username === process.env.REACT_APP_VALID_USERNAME &&
        password === process.env.REACT_APP_VALID_PASSWORD;

      if (!isValidAuthentication) {
        return res(
          ctx.status(401),
          ctx.json({
            error: {
              message:
                'Invalid credentials, please verify the provided information and try again',
            },
          }),
        );
      }

      return res(
        ctx.status(200),
        ctx.json({
          user: process.env.REACT_APP_VALID_USERNAME,
          timestamp: new Date().toISOString(),
        }),
      );
    },
  ),
];
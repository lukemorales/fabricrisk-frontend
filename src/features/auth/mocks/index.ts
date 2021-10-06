import { rest } from 'msw';

import { composeEndpoint } from '../../../utils';
import { ApiRequest } from '../../../services/api/types';
import { LoginRequestBody, LoginResponsePayload } from '../types';
import { SESSIONS_ENDPOINT } from '../requests/constants';

export const authHandlers = [
  rest.post<LoginRequestBody, ApiRequest<LoginResponsePayload>>(
    composeEndpoint(SESSIONS_ENDPOINT),
    (req, res, ctx) => {
      const { username, password } = req.body;

      const isValidAuthentication =
        username === process.env.REACT_APP_VALID_USERNAME &&
        password === process.env.REACT_APP_VALID_PASSWORD;

      if (!isValidAuthentication) {
        return res(
          ctx.status(401),
          ctx.json({
            status: 401,
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
          workDirectory: 'fabricrisk/frontend',
          token: 'fake-token',
        }),
      );
    },
  ),
];

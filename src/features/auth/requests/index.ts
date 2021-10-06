import { AxiosResponse } from 'axios';

import { api } from '../../../services';
import { LoginRequestBody, LoginResponsePayload } from '../types';
import { SESSIONS_ENDPOINT } from './constants';

export const loginRequest = async (payload: LoginRequestBody) => {
  const response = await api.post<
    LoginRequestBody,
    AxiosResponse<LoginResponsePayload>
  >(SESSIONS_ENDPOINT, payload);

  return response.data;
};

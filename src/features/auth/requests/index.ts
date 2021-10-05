import { AxiosResponse } from 'axios';

import { api } from '../../../services';
import { LoginRequestBody, LoginResponsePayload } from '../types';

export const loginRequest = async (payload: LoginRequestBody) => {
  const response = await api.post<
    LoginRequestBody,
    AxiosResponse<LoginResponsePayload>
  >('/login', payload);

  return response.data;
};

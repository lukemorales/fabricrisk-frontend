import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { LoginResponsePayload, LoginRequestBody } from '../../types';
import { loginRequest } from '../../requests';
import { RequestErrorPayload } from '../../../../types';

export const authenticateUser = createAsyncThunk<
  LoginResponsePayload,
  LoginRequestBody,
  { rejectValue: RequestErrorPayload }
>('@auth/authenticateUser', async (payload, { rejectWithValue }) => {
  try {
    return await loginRequest(payload);
  } catch (err) {
    const error = err as AxiosError<RequestErrorPayload>;

    if (!error.response) {
      throw err;
    }

    return rejectWithValue(error.response?.data);
  }
});

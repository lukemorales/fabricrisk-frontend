export type RequestErrorPayload = {
  status: number;
  error: Record<'message', string>;
};

export type ApiRequest<T> = T | RequestErrorPayload;

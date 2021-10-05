export type RequestErrorPayload = Record<'error', Record<'message', string>>;

export type ApiRequest<T> = T | RequestErrorPayload;

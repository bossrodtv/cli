import { HTTP_RESPONSES } from 'shared/constants/http';

const commonHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'Content-Type': 'application/json',
};

type MakeAPIResponseOption<TData, TError> = {
  type: keyof typeof HTTP_RESPONSES;
  data?: TData;
  error?: TError;
  isRaw?: boolean;
};

export const makeAPIResponse = <TData, TError>({
  type,
  data,
  error,
  isRaw = false,
}: MakeAPIResponseOption<TData, TError>) => ({
  statusCode: HTTP_RESPONSES[type].statusCode,
  headers: commonHeaders,
  body: isRaw
    ? JSON.stringify({ data, error })
    : JSON.stringify({
        message: HTTP_RESPONSES[type].message,
        code: HTTP_RESPONSES[type].code,
        data,
        error,
      }),
});

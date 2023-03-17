import type middy from '@middy/core';
import { type APIGatewayProxyEventV2 } from 'aws-lambda';
import { X_HEADERS } from 'shared/constants/http';
import { makeAPIResponse } from 'shared/utils/http';

export const authorizeMiddleware = ({ permission }: { permission: string }) => {
  const before: middy.MiddlewareFn<APIGatewayProxyEventV2> = ({ event }) => {
    const accessToken = event.headers[X_HEADERS.AccessToken];

    if (!accessToken) return makeAPIResponse({ type: 'Unauthorized' });

    // TODO: Implement the authorization logic

    // eslint-disable-next-line no-console
    return console.log({ permission });
  };

  return { before };
};

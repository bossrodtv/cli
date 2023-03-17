import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpRouterHandler from '@middy/http-router';
import { type Handler } from 'aws-lambda';
import { type Route } from 'shared/types/http';
import { makeAPIResponse } from './http';

interface HandlerOptions {
  parseBodyToJson: boolean;
}

export const makeHandler = (
  handler: Handler,
  options: HandlerOptions = { parseBodyToJson: true }
) => {
  const { parseBodyToJson } = options;

  let middyfiedHandler = middy(handler)
    .use(
      httpErrorHandler({
        logger(error) {
          // eslint-disable-next-line no-console
          console.debug('HANDLER ERROR: ', { error });
        },
      })
    )
    .use({
      onError: ({ error, response: data }) =>
        makeAPIResponse({
          type: 'ServerError',
          data,
          error,
        }),
    });

  if (parseBodyToJson) middyfiedHandler = middyfiedHandler.use(jsonBodyParser());

  return middyfiedHandler;
};

export const makeRouterHandler = (routes: Route[]) => makeHandler(httpRouterHandler(routes));

export const makeHandlerPath = (fnName: string, handlerName?: string) =>
  `src/functions/${fnName}/${handlerName || 'handler'}.run`;

export const makeRoutes = (routes: Omit<Route, 'handler'>[]) =>
  routes.map(({ method, path }) => ({ httpApi: { method, path } }));

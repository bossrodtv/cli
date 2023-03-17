import { type Method } from '@middy/http-router';
import { type APIGatewayProxyEventV2, type Handler } from 'aws-lambda';

export interface Route {
  method: Method;
  path: string;
  handler: Handler;
}

export type APIGatewayEventType<TEvent = undefined> = TEvent extends undefined
  ? APIGatewayProxyEventV2
  : Omit<APIGatewayProxyEventV2, keyof TEvent> & TEvent;

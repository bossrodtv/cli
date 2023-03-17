import { Method } from '@middy/http-router';
import { type Route } from 'shared/types/http';

export const swaggerRoutes: Omit<Route, 'handler'>[] = [
  {
    method: Method.Get,
    path: '/',
  },
  {
    method: Method.Get,
    path: '/swagger.json',
  },
];

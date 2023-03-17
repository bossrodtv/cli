import { Method } from '@middy/http-router';
import { archiveSample } from 'functions/samples/archive';
import { createSample } from 'functions/samples/create';
import { deleteSample } from 'functions/samples/delete';
import { getSample } from 'functions/samples/get';
import { listOfSamples } from 'functions/samples/list';
import { updateSample } from 'functions/samples/update';
import { FUNCTIONS } from 'shared/constants/functions';
import { type Route } from 'shared/types/http';
import { makeRouterHandler } from 'shared/utils/lambda';

export const sampleRoutes: Route[] = [
  {
    method: Method.Get,
    path: `/${FUNCTIONS.Samples}`,
    handler: listOfSamples,
  },
  {
    method: Method.Get,
    path: `/${FUNCTIONS.Samples}/{id}`,
    handler: getSample,
  },
  {
    method: Method.Post,
    path: `/${FUNCTIONS.Samples}`,
    handler: createSample,
  },
  {
    method: Method.Put,
    path: `/${FUNCTIONS.Samples}/{id}`,
    handler: updateSample,
  },
  {
    method: Method.Delete,
    path: `/${FUNCTIONS.Samples}/{id}`,
    handler: deleteSample,
  },
  {
    method: Method.Delete,
    path: `/${FUNCTIONS.Samples}/{id}/archive`,
    handler: archiveSample,
  },
];

export const run = makeRouterHandler(sampleRoutes);

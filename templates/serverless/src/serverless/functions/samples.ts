// eslint-disable-next-line import/no-extraneous-dependencies
import { type AWS } from '@serverless/typescript';
import { sampleRoutes } from 'functions/samples/handler';
import { FUNCTIONS } from 'shared/constants/functions';
import { makeHandlerPath, makeRoutes } from 'shared/utils/lambda';

export const samplesFnConfig: AWS['functions'] = {
  [FUNCTIONS.Samples]: {
    handler: makeHandlerPath(FUNCTIONS.Samples),
    events: makeRoutes(sampleRoutes),
    environment: {
      /* Put here all the environment variables that you need */
    },
  },
};

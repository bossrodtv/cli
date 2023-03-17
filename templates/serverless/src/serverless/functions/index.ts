// eslint-disable-next-line import/no-extraneous-dependencies
import { type AWS } from '@serverless/typescript';
import { swaggerRoutes } from 'modules/swagger/routes';
import { FUNCTIONS } from 'shared/constants/functions';
import { makeHandlerPath, makeRoutes } from 'shared/utils/lambda';
import { samplesFnConfig } from './samples';

export const functions: AWS['functions'] = {
  [FUNCTIONS.Swagger]: {
    handler: makeHandlerPath(FUNCTIONS.Swagger),
    events: makeRoutes(swaggerRoutes),
    package: {
      patterns: ['src/functions/**/*.ts', 'src/modules/swagger/**/*.ts'],
    },
  },
  ...samplesFnConfig,
};

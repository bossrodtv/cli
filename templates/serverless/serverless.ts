import {
  DEPLOYMENT_BUCKET_NAME,
  LAMBDA_TIMEOUT,
  SERVERLESS,
  SERVICE_NAME,
} from 'serverless/constants';
import { custom } from 'serverless/custom';
import { functions } from 'serverless/functions';
import { resources } from 'serverless/resources';

import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: SERVICE_NAME,
  frameworkVersion: '3',
  provider: {
    name: 'aws',
    stage: SERVERLESS.Stage,
    runtime: 'nodejs16.x',
    timeout: LAMBDA_TIMEOUT,
    deploymentBucket: {
      name: DEPLOYMENT_BUCKET_NAME,
    },
    httpApi: {
      name: `${SERVERLESS.ServiceName}-apis-${SERVERLESS.Stage}`,
      cors: {
        allowedOrigins: ['*'],
        allowedHeaders: ['*'],
        allowedMethods: ['*'],
      },
    },
  },
  functions,
  custom,
  resources,
  package: { individually: true },
  plugins: [
    'serverless-esbuild',
    'serverless-offline',
    'serverless-iam-roles-per-function',
    'serverless-deployment-bucket',
  ],
};

module.exports = serverlessConfiguration;

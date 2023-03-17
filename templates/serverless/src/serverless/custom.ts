import type { AWS } from '@serverless/typescript';

/**
 * This file contains values that are used in other parts of the
 * Serverless configuration as well as configuration of other plugins.
 */

export const custom: AWS['custom'] = {
  /* SSM variables (from Secrets Manager) */
  // TODO: Uncomment the following line and add the required variables for SSM
  // [Customs.Secrets]: `\${ssm:/aws/reference/secretsmanager/${SERVERLESS.ServiceName}/${SERVERLESS.Stage}}`,

  // TODO: Uncomment the following line and add the required variables for centralized bucket for service
  // [Customs.Bucket]: { 'Fn::ImportValue': appendStage(CUSTOMS.Bucket) },

  esbuild: {
    bundle: true,
    minify: false,
    sourcemap: true,
    exclude: [
      'aws-sdk',

      /* Packages below are packages unnecessarily required by Knex.js */
      'mysql',
      'mysql2',
      'better-sqlite3',
      'pg-query-stream',
      'tedious',
      'oracledb',
      'sqlite3',
    ],
    target: 'node16',
    define: { 'require.resolve': undefined },
    platform: 'node',
    concurrency: 1,
  },
};

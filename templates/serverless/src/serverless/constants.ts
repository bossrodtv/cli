export const SERVICE_NAME = 'service-name' as const;

export const DEPLOYMENT_BUCKET_NAME = 'project-name' as const;

export const LAMBDA_TIMEOUT = 10 as const; // In seconds

export const SERVERLESS = {
  ServiceName: `\${self:service}`,
  Stage: `\${opt:stage, 'dev'}`,
} as const;

export const CUSTOMS = {
  Secrets: 'secrets',
  Bucket: 'project-name-bucket',
} as const;

export const RESOURCES = {
  Samples: 'samples',
} as const;

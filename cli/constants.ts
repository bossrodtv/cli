export const APPS = ['next', 'react', 'react-native', 'serverless-framework', 'sst'] as const;

export type AppType = typeof APPS[number];

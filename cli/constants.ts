export const APPS = ['next', 'react', 'react-native', 'serverless'] as const;

export type AppType = typeof APPS[number];

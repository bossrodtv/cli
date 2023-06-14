export const APPS = ['next', 'sst'] as const;

export type AppType = (typeof APPS)[number];

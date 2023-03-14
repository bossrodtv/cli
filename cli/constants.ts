export const APPS = [
  'next',
  'react',
  'react-native',
  'node (In Progress)',
  'sveltekit (In Progress)',
  'serverless (In Progress)',
] as const;

export type AppType = typeof APPS[number];

export const PACKAGE_MANAGERS = ['pnpm', 'npm', 'yarn'] as const;

export type PackageManagerType = typeof PACKAGE_MANAGERS[number];

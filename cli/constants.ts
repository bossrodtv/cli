export const APPS = [
  'next',
  'react',
  'react-native',
  'serverless',
  // TODO: Uncomment when SvelteKit and Node are ready
  // 'node',
  // 'sveltekit',
] as const;

export type AppType = typeof APPS[number];

export const PACKAGE_MANAGERS = ['pnpm', 'npm', 'yarn'] as const;

export type PackageManagerType = typeof PACKAGE_MANAGERS[number];

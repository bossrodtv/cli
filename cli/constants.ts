export const APPS = ['node', 'react', 'react-native', 'next', 'sveltekit', 'serverless'] as const;

export type APP_TYPES = typeof APPS[number];

export const PACKAGE_MANAGERS = ['pnpm', 'npm', 'yarn'] as const;

export type PACKAGE_MANAGER_TYPES = typeof PACKAGE_MANAGERS[number];

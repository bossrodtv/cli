/**
 * * When you add a new environment, you must add it to the list below.
 * * - You must add it to the `.env` file.
 * * - You must add it to the `.env.example` file.
 * * - You must add it to the `src/@types/env.d.ts` file.
 * * - You must add it to the `src/shared/constants/environments.ts` file. (Optional)
 * * - You must do `pnpm clean` clear the cache then do the `pnpm dev:android` or `pnpm dev:ios` command.
 */

export const STAGES = {
  Dev: 'dev',
  Staging: 'staging',
  Prod: 'prod',
} as const;

export type StageType = typeof STAGES[keyof typeof STAGES];

/**
 * * When you add a new environment, you must add it to the list below.
 * * - You must add it to the `.env` file.
 * * - You must add it to the `.env.example` file.
 * * - You must add it to the `src/shared/constants/environments.ts` file.
 */

export const STAGES = {
  Dev: 'dev',
  Staging: 'staging',
  Prod: 'prod',
} as const;

export type StageType = typeof STAGES[keyof typeof STAGES];

export const STAGE = (process.env.STAGE as StageType) || STAGES.Dev;

/**
 * * When you add a new environment, you must add it to the list below.
 * * - You must add it to the `.env` file.
 * * - You must add it to the `.env.example` file.
 * * - You must add it to the `src/shared/constants/environments.ts` file.
 */

import { config } from 'dotenv';

config();

export const STAGES = {
  Dev: 'dev',
  Staging: 'staging',
  Prod: 'prod',
} as const;

export type StageType = (typeof STAGES)[keyof typeof STAGES];

export const STAGE = (process.env.STAGE as StageType) || STAGES.Dev;

export const DB_HOST = process.env.DB_HOST || '';
export const DB_PORT = process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432;
export const DB_USERNAME = process.env.DB_USERNAME || '';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_NAME = process.env.DB_NAME || '';

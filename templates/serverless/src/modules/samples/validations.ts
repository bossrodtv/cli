import { z } from 'zod';

export const idSampleSchema = z.object({
  id: z.string().uuid(),
});

export const createSampleSchema = z.object({
  name: z.string().trim(),
  description: z.string().trim().optional(),
});

export const updateSampleSchema = z.object({
  id: z.string().uuid(),
  name: z.string().trim().optional(),
  description: z.string().trim().optional(),
});

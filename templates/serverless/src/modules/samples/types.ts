import { type z } from 'zod';
import { type createSampleSchema, type updateSampleSchema } from './validations';

export interface Sample {
  id: string;
  name: string;
  description: string;
}

export type CreateSample = z.infer<typeof createSampleSchema>;
export type UpdateSample = z.infer<typeof updateSampleSchema>;

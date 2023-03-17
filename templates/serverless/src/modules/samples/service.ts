import { TABLES } from 'shared/constants/database';
import { PGService } from 'shared/services/pg';
import { connection } from 'shared/utils/database';
import { type Sample } from './types';

export class SampleService extends PGService<Sample> {
  constructor() {
    super({ connection, tableName: TABLES.Samples });
  }
}

export const sampleService = new SampleService();

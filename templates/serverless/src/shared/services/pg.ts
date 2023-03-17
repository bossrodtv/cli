import { type Knex } from 'knex';

export class PGService<TSchema extends object> {
  protected connection: Knex;

  protected tableName: string;

  protected raw: Knex.RawBuilder;

  protected ref: Knex.RefBuilder;

  constructor({ connection, tableName }: { connection: Knex; tableName: string }) {
    this.connection = connection;
    this.tableName = tableName;
    this.raw = connection.raw;
    this.ref = connection.ref;
  }

  get = async (id: string) => {
    const records = (await this.connection
      .select('*')
      .from(this.tableName)
      .where('id', id)) as TSchema[];
    return records;
  };

  list = async () => {
    const records = (await this.connection.select('*').from(this.tableName)) as TSchema[];
    const [totalData] = await this.connection(this.tableName).count('id', {
      as: 'totalRecords',
    });
    return { records, totalRecords: (totalData?.totalRecords as number) || 0 };
  };

  create = async <TCreate extends Record<string, unknown>>(values: TCreate) => {
    const records = (await this.connection
      .insert(values)
      .into(this.tableName)
      .returning('*')) as TSchema[];
    return records;
  };

  update = async <TUpdate extends Record<string, unknown>>(id: string, values: TUpdate) => {
    const records = (await this.connection(this.tableName)
      .update({ ...values, updatedAt: 'NOW()' })
      .where('id', id)
      .returning('*')) as TSchema[];
    return records;
  };

  archive = async (ids: string[]) => {
    const records = (await this.connection(this.tableName)
      .update({ deletedAt: 'NOW()' })
      .whereIn('id', ids)
      .returning('*')) as TSchema[];
    return records;
  };

  delete = async (ids: string[]) => {
    const records = (await this.connection(this.tableName)
      .del()
      .whereIn('id', ids)
      .returning('*')) as TSchema[];
    return records;
  };
}

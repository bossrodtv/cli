import knex, { type Knex } from 'knex';
import pg from 'pg';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from 'shared/constants/environments';

pg.types.setTypeParser(pg.types.builtins.INT8, (value: string) => Number(value));
pg.types.setTypeParser(pg.types.builtins.FLOAT8, (value: string) => Number(value));
pg.types.setTypeParser(pg.types.builtins.NUMERIC, (value: string) => Number(value));

const connectionConfig: Partial<Knex.PgConnectionConfig> = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
};

const pool: Knex.Config['pool'] = { min: 1, max: 1 };

export const connect = (database: string) =>
  knex({
    client: 'pg',
    connection: {
      ...connectionConfig,
      database,
    },
    pool,
  });

// TODO: Uncomment the following lines when you need to use a database.
export const connection = connect(DB_NAME);

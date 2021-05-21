import { Knex } from 'knex'

const connection: Knex.ConnectionConfig = {
  database: 'test',
  host: '127.0.0.1',
  user: 'test',
  password: 'secret',
}

export default {
  development: {
    client: 'pg',
    connection,
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
}

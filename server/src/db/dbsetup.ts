import knex from 'knex'
import { Model } from 'objection'
import knexfile from './knexfile'

export default function dbsetup() {
  const db = knex(knexfile.development)
  Model.knex(db)
}

import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return await knex.schema
    .createTable('user', (table) => {
      table.increments('id')
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('name').notNullable()
      table.string('bio')
      table.integer('age')
    })
    .createTable('note', (table) => {
      table.increments('id')
      table.timestamp('createdAt').defaultTo(knex.fn.now())
      table.string('title').notNullable()
      table.string('description')
      table.integer('userId').references('user.id').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('note').dropTable('user')
}

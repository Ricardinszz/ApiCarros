import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'anos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_ano')
      table.integer('id_modelo').unsigned().references('id_modelo').inTable('modelos').notNullable()
      table.integer('ano').notNullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

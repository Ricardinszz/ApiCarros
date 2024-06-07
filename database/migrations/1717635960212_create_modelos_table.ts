import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'modelos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_modelo')
      table.integer('id_marca').unsigned().references('id').inTable('marcas').notNullable()
      table.string('nome', 255).notNullable()
      table.string('categoria', 255).notNullable()

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

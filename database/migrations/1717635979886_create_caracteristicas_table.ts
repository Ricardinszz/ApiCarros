import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'caracteristicas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_caracteristica')
      table.integer('id_modelo').unsigned().references('id_modelo').inTable('modelos').notNullable()
      table.string('tipo_combustivel', 255).notNullable()
      table.string('potencia_motor', 255).notNullable()
      table.string('transmissao', 255).notNullable()
      table.string('cor', 255).notNullable()

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

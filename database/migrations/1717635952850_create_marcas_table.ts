import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Marcas extends BaseSchema {
  protected tableName = 'marcas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.string('pais_origem').notNullable()
      table.integer('ano_fundacao')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

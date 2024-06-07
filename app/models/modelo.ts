import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Marca from './marca.js'
import Ano from './ano.js'

export default class Modelo extends BaseModel {
  @column({ isPrimary: true })
  declare id_modelo: number

  @column()
  declare id_marca: number

  @column()
  declare nome: string

  @column()
  declare categoria: string

  @belongsTo(() => Marca, {
    foreignKey: 'id_marca',
  })
  declare marca: BelongsTo<typeof Marca>

  @hasMany(() => Ano, {
    foreignKey: 'id_modelo',
  })
  declare anos: HasMany<typeof Ano>

}

import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Modelo from './modelo.js'

export default class Caracteristica extends BaseModel {
  @column({ isPrimary: true })
  declare id_caracteristica: number

  @column()
  declare id_modelo: number

  @column()
  declare tipo_combustivel: string

  @column()
  declare potencia_motor: string

  @column()
  declare transmissao: string

  @column()
  declare cor: string

  @belongsTo(() => Modelo, {
    foreignKey: 'id_modelo',
  })
  declare modelo: BelongsTo<typeof Modelo>
}
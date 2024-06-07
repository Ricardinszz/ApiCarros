import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Modelo from './modelo.js'


export default class Ano extends BaseModel {
  @column({ isPrimary: true })
  declare id_ano: number

  @column()
  declare id_modelo: number

  @column()
  declare ano: number

  @belongsTo(() => Modelo, {
    foreignKey: 'id_modelo',
  })
  declare modelo: BelongsTo<typeof Modelo>
}
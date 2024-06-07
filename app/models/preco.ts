import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Modelo from './modelo.js'
import Ano from './ano.js'

export default class Preco extends BaseModel {
  @column({ isPrimary: true })
  declare id_preco: number

  @column()
  declare id_modelo: number

  @column()
  declare id_ano: number

  @column()
  declare preco: number


  @belongsTo(() => Modelo, {
    foreignKey: 'id_modelo',
  })
  declare modelo: BelongsTo<typeof Modelo>

  @belongsTo(() => Ano, {
    foreignKey: 'id_ano', 
  })
  declare anos: BelongsTo<typeof Ano>

}
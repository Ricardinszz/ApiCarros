import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Modelo from './modelo.js'


export default class Marca extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare pais_origem: string

  @column()
  declare ano_fundacao: number

@hasMany(() => Modelo, {
  foreignKey: 'id_marca',
})
declare modelos: HasMany<typeof Modelo>

}
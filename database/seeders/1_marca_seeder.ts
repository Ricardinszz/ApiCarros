import Marca from '#models/marca'
import { BaseSeeder } from '@adonisjs/lucid/seeders'


export default class MarcasSeeder extends BaseSeeder {
  public async run() {
    await Marca.createMany([
      {
        nome: 'vw',
        pais_origem: 'Brasil',
        ano_fundacao: 1990,
      },
      {
        nome: 'Honda',
        pais_origem: 'Estados Unidos',
        ano_fundacao: 1985,
      },
      
    ])
  }
}

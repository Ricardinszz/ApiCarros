import Ano from '#models/ano'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    await Ano.createMany([
      {
        id_modelo: 1,
        ano: 2020,
      },
      {
        id_modelo: 2,
        ano: 2021,
      },
      
    ])
  }
}

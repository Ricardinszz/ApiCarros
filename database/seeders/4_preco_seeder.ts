import Preco from '#models/preco'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    await Preco.createMany([
      {
        id_modelo: 1,
        id_ano: 1,
        preco: 100000.00,
      },
      {
        id_modelo: 2,
        id_ano: 2,
        preco: 110000.00,
      },

    ])
  }
}

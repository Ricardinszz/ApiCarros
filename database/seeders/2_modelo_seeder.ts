import Modelo from '#models/modelo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    await Modelo.createMany([
      {
        id_marca: 1,
        nome: 'Corsa',
        categoria: 'HATCH',
      },
      {
        id_marca: 2,
        nome: 'HRV',
        categoria: 'SUV',
      },
      
    ])
  }
}

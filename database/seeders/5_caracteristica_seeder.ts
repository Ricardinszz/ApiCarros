import Caracteristica from '#models/caracteristica'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    await Caracteristica.createMany([
      {
        id_modelo: 1,
        tipo_combustivel: 'Gasolina',
        potencia_motor: '150 cv',
        transmissao: 'Automática',
        cor: 'Prata',
      },
      {
        id_modelo: 2,
        tipo_combustivel: 'Etanol',
        potencia_motor: '130 cv',
        transmissao: 'Manual',
        cor: 'Preto',
      },
    
    ])
  }
}

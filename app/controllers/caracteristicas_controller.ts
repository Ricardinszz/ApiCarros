import { HttpContext } from '@adonisjs/core/http'
import Caracteristica from '#models/caracteristica'

export default class CaracteristicasController {
  async index({ request }:HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Caracteristica.query().preload('modelo').paginate(page, perPage)
  }

  async show({ params }:HttpContext) {
    return await Caracteristica.findOrFail(params.id)
  }

  async store({ request }:HttpContext) {
    const dados = request.only(['id_modelo', 'tipo_combustivel', 'potencia_motor', 'transmissao', 'cor'])
    return await Caracteristica.create(dados)
  }

  async update({ params, request }:HttpContext) {
    const caracteristica = await Caracteristica.findOrFail(params.id)
    const dados = request.only(['id_modelo', 'tipo_combustivel', 'potencia_motor', 'transmissao', 'cor'])

    caracteristica.merge(dados)
    return await caracteristica.save()
  }

  async destroy({ params }:HttpContext) {
    const caracteristica = await Caracteristica.findOrFail(params.id)
    await caracteristica.delete()
    return { msg: 'Registro deletado com sucesso', caracteristica }
  }
}

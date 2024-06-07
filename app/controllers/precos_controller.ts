import { HttpContext } from '@adonisjs/core/http'
import Preco from '#models/preco'

export default class PrecosController {
  async index({ request }:HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Preco.query().preload('modelo').preload('anos').paginate(page, perPage)
  }
  
  async show({ params }:HttpContext) {
    return await Preco.findOrFail(params.id)
  }

  async store({ request }:HttpContext) {
    const dados = request.only(['id_modelo', 'id_ano', 'preco'])
    return await Preco.create(dados)
  }

  async update({ params, request }:HttpContext) {
    const preco = await Preco.findOrFail(params.id)
    const dados = request.only(['id_modelo', 'id_ano', 'preco'])

    preco.merge(dados)
    return await preco.save()
  }

  async destroy({ params }:HttpContext) {
    const preco = await Preco.findOrFail(params.id)
    await preco.delete()
    return { msg: 'Registro deletado com sucesso', preco }
  }
}

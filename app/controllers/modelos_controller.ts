
import Modelo from '#models/modelo'
import { HttpContext } from '@adonisjs/core/http'

export default class ModelosController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Modelo.query().preload('marca').preload('anos').paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Modelo.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {
    const dados = request.only(['id_marca', 'nome', 'categoria'])
    return await Modelo.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const modelo = await Modelo.findOrFail(params.id)
    const dados = request.only(['id_marca', 'nome', 'categoria'])

    modelo.merge(dados)
    return await modelo.save()
  }

  async destroy({ params }: HttpContext) {
    const modelo = await Modelo.findOrFail(params.id)
    await modelo.delete()
    return { msg: 'Registro deletado com sucesso', modelo }
  }
}

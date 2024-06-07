import { HttpContext } from '@adonisjs/core/http'
import Ano from '#models/ano'

export default class AnosController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Ano.query().preload('modelo').paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Ano.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {
    const dados = request.only(['id_modelo', 'ano'])
    return await Ano.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const ano = await Ano.findOrFail(params.id)
    const dados = request.only(['id_modelo', 'ano'])

    ano.merge(dados)
    return await ano.save()
  }

  async destroy({ params }: HttpContext) {
    const ano = await Ano.findOrFail(params.id)
    await ano.delete()
    return { msg: 'Registro deletado com sucesso', ano }
  }
}

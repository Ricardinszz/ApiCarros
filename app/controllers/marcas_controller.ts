// import type { HttpContext } from '@adonisjs/core/http'

import Marca from '#models/marca'
import { HttpContext } from '@adonisjs/core/http'


export default class MarcasController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Marca.query().preload('modelos').paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Marca.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {
    const data = request.only(['nome', 'pais_origem', 'ano_fundacao'])
    return await Marca.create(data)
  }

  async update({ params, request }: HttpContext) {
    const marca = await Marca.findOrFail(params.id)
    const data = request.only(['nome', 'pais_origem', 'ano_fundacao'])

    marca.merge(data)
    return await marca.save()
  }

  async destroy({ params }: HttpContext) {
    const marca = await Marca.findOrFail(params.id)
    await marca.delete()
    return { msg: 'Registro deletado com sucesso', marca }
  }
}

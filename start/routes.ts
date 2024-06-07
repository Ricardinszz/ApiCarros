/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import AnosController from '#controllers/anos_controller'
import CaracteristicasController from '#controllers/caracteristicas_controller'
import MarcasController from '#controllers/marcas_controller'
import ModelosController from '#controllers/modelos_controller'
import PrecosController from '#controllers/precos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/marcas', MarcasController).apiOnly()
router.resource('/modelos', ModelosController).apiOnly()
router.resource('/anos', AnosController).apiOnly()
router.resource('/precos', PrecosController).apiOnly()
router.resource('/caracteristicas', CaracteristicasController).apiOnly()
import { RouteHandlerMethod } from 'fastify'
import { availableMealTypes } from '../../../entities/Meal'

const fetchIngredientTypesHandler: RouteHandlerMethod = async (req, res) => {
  return res
    .code(200)
    .send({
      data: availableMealTypes,
    })
}

export default fetchIngredientTypesHandler

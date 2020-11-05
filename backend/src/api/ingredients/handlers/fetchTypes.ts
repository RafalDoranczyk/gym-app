import { RouteHandlerMethod } from 'fastify'
import { availableCountTypes, availableSourceTypes } from '../../../entities/Ingredient'

const fetchIngredientTypesHandler: RouteHandlerMethod = async (req, res) => {
  await res
    .code(200)
    .send({
      data:
       {
         countTypes:  availableCountTypes,
         sourceTypes: availableSourceTypes,
       },
    })
}

export default fetchIngredientTypesHandler

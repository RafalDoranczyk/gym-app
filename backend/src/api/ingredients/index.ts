
import { RouteOptions } from 'fastify'
import * as schemas from './schemas'
import * as handlers from './handlers'
import { INGREDIENTS_ROUTE } from '../../constants'

const routes: RouteOptions[] = [
  {
    method:  'DELETE',
    url:     INGREDIENTS_ROUTE,
    schema:  schemas.deleteIngredientSchema,
    handler: handlers.deleteIngredient,
  },
  {
    method:  'GET',
    url:     INGREDIENTS_ROUTE,
    schema:  schemas.fetchAllIngredientsSchema,
    handler: handlers.fetchAllIngredientsHandler,
  },
  {
    method:  'POST',
    url:     INGREDIENTS_ROUTE,
    schema:  schemas.createIngredientSchema,
    handler: handlers.createIngredientHandler,
  },
  {
    method:  'GET',
    url:     `${INGREDIENTS_ROUTE}/types`,
    handler: handlers.fetchIngredientTypesHandler,
  },
  {
    method:  'PATCH',
    url:     INGREDIENTS_ROUTE,
    schema:  schemas.updateIngredientSchema,
    handler: handlers.updateIngredientHandler,
  },
]

export default routes

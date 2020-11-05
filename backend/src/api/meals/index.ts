
import { RouteOptions } from 'fastify'
import * as handlers from './handlers'
import * as schemas from './schemas'
import { MEALS_ROUTE } from '../../constants'

const routes: RouteOptions[] = [
  {
    method:  'DELETE',
    url:     MEALS_ROUTE,
    schema:  schemas.deleteMealSchema,
    handler: handlers.deleteMealHandler,
  },
  {
    method:  'GET',
    url:     MEALS_ROUTE,
    schema:  schemas.fetchAllMealsSchema,
    handler: handlers.fetchAllMealsHandler,
  },
  {
    method:  'GET',
    url:     `${MEALS_ROUTE}/types`,
    schema:  schemas.fetchTypesSchema,
    handler: handlers.fetchMealTypes,
  },
  {
    method:  'POST',
    url:     MEALS_ROUTE,
    schema:  schemas.createMealSchema,
    handler: handlers.createMealHandler,
  },
]

export default routes


import { RouteOptions } from 'fastify'
import * as schemas from './schemas'
import * as handlers from './handlers'
import { FOOD_DAYS_ROUTE } from '../../constants'

const routes: RouteOptions[] = [
  {
    method:  'GET',
    url:     FOOD_DAYS_ROUTE,
    handler: handlers.fetchAllFoodDaysHandler,
  },
  {
    method:  'POST',
    url:     FOOD_DAYS_ROUTE,
    handler: handlers.createFoodDayHandler,
  },
]

export default routes

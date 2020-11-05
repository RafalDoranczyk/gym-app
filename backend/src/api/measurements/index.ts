
import { RouteOptions } from 'fastify'
import * as handlers from './handlers'
import * as schemas from './schemas'
import { MEASUREMENTS_ROUTE } from '../../constants'

const routes: RouteOptions[] = [
  {
    method:  'GET',
    url:     MEASUREMENTS_ROUTE,
    schema:  schemas.fetchMeasurementsSchema,
    handler: handlers.fetchMeasurementHandler,
  },
  {
    method:  'POST',
    url:     MEASUREMENTS_ROUTE,
    schema:  schemas.createOrUpdateMeasurements,
    handler: handlers.createMeasurementHandler,
  },
]

export default routes

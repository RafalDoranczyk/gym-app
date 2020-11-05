import { RouteOptions } from 'fastify'
import checkHealth from './handlers'
import { HEALTH_ROUTE } from '../../constants'

const routes: RouteOptions[] = [
  {
    method:  'GET',
    url:     HEALTH_ROUTE,
    handler: checkHealth,
  },
]

export default routes

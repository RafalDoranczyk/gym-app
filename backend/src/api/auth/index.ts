
import { RouteOptions } from 'fastify'
import * as handlers from './handlers'
import * as schemas from './schemas'
import { AUTH_ROUTE } from '../../constants'

const routes: RouteOptions[] = [
  {
    method:  'POST',
    url:     `${AUTH_ROUTE}/login`,
    schema:  schemas.loginUserSchema,
    handler: handlers.login,
  },
  {
    method:  'POST',
    url:     `${AUTH_ROUTE}/signup`,
    schema:  schemas.signupUserSchema,
    handler: handlers.signup,
  },
  {
    method:  'POST',
    url:     `${AUTH_ROUTE}/refresh`,
    handler: handlers.refreshToken,
  },
]

export default routes

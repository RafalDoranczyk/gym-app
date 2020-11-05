/* eslint-disable @typescript-eslint/no-floating-promises */
import fastify from 'fastify'
import { ContainerModule, interfaces } from 'inversify'
import CORS from 'fastify-cors'
import COOKIES from 'fastify-cookie'
import HELMET from 'fastify-helmet'
import { ConfigTypes } from './interfaces'
import { protectedRoutes, notProtectedRoutes } from '../api'
import authPrehandler from '../middlewares/auth'

export default new ContainerModule(bind => {
  const server = fastify({
    logger: true,
    ajv:    {
      customOptions: {
        allErrors:    true,
        messages:     true,
        jsonPointers: true,
        $data:        true,
        coerceTypes:  true,
      },
    },
  })

  server.register(HELMET)
  server.register(CORS, {
    exposedHeaders: ['Content-Type', 'Authorization'],
    credentials:    true,
    origin:         (origin, cb) => {
      //  Request from localhost will pass
      cb(null, true)

      return

      cb(new Error('Not allowed'), false)
    },
  })
  server.register(COOKIES)

  notProtectedRoutes
    .forEach(route =>
      server.route(route))

  protectedRoutes
    .forEach(route =>
      server
        .route({
          preHandler: authPrehandler,
          ...route,
        }))

  bind(ConfigTypes.Server).toDynamicValue((context: interfaces.Context) => {
    server.decorateRequest('container', context.container)

    return server
  })
})

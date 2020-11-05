import 'reflect-metadata'
import { createContainer } from './container'
import { ConfigTypes, ConfigInterface } from './container/interfaces'
import { FastifyInstance } from 'fastify'

const container = createContainer()

const server = container.get<FastifyInstance>(ConfigTypes.Server)
const config = container.get<ConfigInterface>(ConfigTypes.Config)

server.listen(config.port, config.host, () => {
  console.log(`Running on http://localhost:${config.port}`)
})

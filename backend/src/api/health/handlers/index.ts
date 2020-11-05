import { RouteHandler } from 'fastify'

const checkHealth : RouteHandler = async (req, res) => {
  return res.send({ status: 'ok' })
}

export default checkHealth

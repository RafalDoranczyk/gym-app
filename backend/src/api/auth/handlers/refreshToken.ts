import { JsonWebTokenError } from 'jsonwebtoken'
import { RouteHandler } from 'fastify'
import AuthService from '../../../services/auth'
import { RefreshTokenRequest } from '../interfaces'

const refreshTokenHandler : RouteHandler = async (req: RefreshTokenRequest, res) => {
  const { refreshToken } = req.body

  if (!refreshToken) {
    return res.status(401).send()
  }

  try {
    const authService = new AuthService()
    const payload = authService.verifyToken(refreshToken)
    const newToken = authService.getNewAccessToken(payload.id, payload.username)

    return res.status(201).send({ token: newToken })
  } catch (error) {
    error instanceof JsonWebTokenError
      ? await res.status(401).send(error)
      : await res.status(400).send(error)
  }
}

export default refreshTokenHandler

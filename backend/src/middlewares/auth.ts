import { preHandlerHookHandler } from 'fastify'
import { JsonWebTokenError } from 'jsonwebtoken'
import UserRepository from '../repositories/User'
import AuthService from '../services/auth'

const authMiddleware: preHandlerHookHandler = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res
      .status(401)
      .send({ message: 'Not Authorized' })
  }
  try {
    const { id } = new AuthService().verifyToken(token)
    const userRepository = req.container.get(UserRepository)
    const user = await userRepository.findOne(id)
    req.user = user
  } catch (error) {
    error instanceof JsonWebTokenError
      ? await res.status(401).send(error)
      : await res.status(400).send(error)
  }
}

export default authMiddleware

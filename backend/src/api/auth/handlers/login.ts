import { RouteHandler } from 'fastify'
import UserRepository from '../../../repositories/User'
import AuthService from '../../../services/auth'
import { LoginUserRequest } from '../interfaces'

const loginUserHandler : RouteHandler = async (req: LoginUserRequest, res) => {
  const { email, password } = req.body
  const userRepository = req.container.get(UserRepository)

  try {
    const user = await userRepository.findOne({ email })

    if (!user) {
      return res
        .status(400)
        .send({ message: 'There was a problem logging in. Check your email and password or create an account.' })
    }

    const isPasswordValid = await userRepository.checkIfPasswordIsValid(password, user.password)

    if (!isPasswordValid) {
      return res
        .status(400)
        .send({ message: 'Passwords not match' })
    }

    const authTokens = new AuthService().getAccessAndRefreshToken(user.id, user.username)

    return res
      .status(200)
      .headers({
        authorization: authTokens,
      })
      .send({
        message: 'Login successfull',
      })
  } catch (error) {
    console.log(error)

    return res.send(error)
  }
}

export default loginUserHandler

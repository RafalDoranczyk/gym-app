import { RouteHandler } from 'fastify'
import UserRepository from '../../../repositories/User'
import AuthService from '../../../services/auth'
import { SignupUserRequest } from '../interfaces'
import { exampleIngredients } from '../../ingredients/starterIngredients'
import IngredientRepository from '../../../repositories/Ingredient'
import MeasurementRepository from '../../../repositories/Measurement'

const signupUserHandler : RouteHandler = async (req: SignupUserRequest, res) => {
  const userRepository = req.container.get(UserRepository)
  const ingredientRepository = req.container.get(IngredientRepository)
  const measurementsRepository = req.container.get(MeasurementRepository)

  try {
    const isEmailInUse = await userRepository.findOne({ email: req.body.email })
    if (isEmailInUse) {
      return res
        .status(400)
        .send({ message: 'Email is already in use' })
    } else {
      const user = await userRepository.createUser(req.body)

      // for (let i = 0; i < 10; i++) {
      for (const ing of exampleIngredients) {
        await ingredientRepository.createNewIngredient({
          name:       ing.name,
          price:      ing.price,
          kcal:       ing.kcal,
          carbs:      ing.carbs,
          protein:    ing.protein,
          fat:        ing.fat,
          sourceType: ing.sourceType,
          countType:  ing.countType,
          user,
        })
      }
      // }

      await measurementsRepository.createFreshMeasurement(user)

      const tokens = new AuthService().getAccessAndRefreshToken(user.id, user.username)

      return res
        .status(201)
        .header('authorization', tokens)
        .send({ message: 'You have created an account!' })
    }
  } catch (error) {
    console.log(error)

    return res
      .send(error)
  }
}

export default signupUserHandler

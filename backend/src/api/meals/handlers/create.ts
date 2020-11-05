import { RouteHandlerMethod } from 'fastify'
import MealRepository from '../../../repositories/Meal'
import { CreateMealRequest } from '../interfaces'

const createMealHandler : RouteHandlerMethod = async (req: CreateMealRequest, res) => {
  const mealRepository = req.container.get(MealRepository)

  try {
    const data = await mealRepository.createNewMeal({ ...req.body, user: req.user })

    return res
      .status(201)
      .send({
        data, message: 'You\'ve created new meal!',
      })
  } catch (error) {
    console.log(error)

    return res.code(400).send()
  }
}

export default createMealHandler

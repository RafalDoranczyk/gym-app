import { RouteHandlerMethod } from 'fastify'
import FoodDayRepository from '../../../repositories/FoodDay'
import { CreateFoodDayRequest } from '../interfaces'

const createFoodDayHandler: RouteHandlerMethod = async (req: CreateFoodDayRequest, res) => {
  const foodDayRepository = req.container.get(FoodDayRepository)

  try {
    const data = await foodDayRepository.createNewFoodDay({ user: req.user, ...req.body })

    return res.send({
      data,
      message: 'You have created new food day!',
    })
  } catch (error) {
    console.log(error)

    return res.send(error)
  }
}

export default createFoodDayHandler

import { RouteHandlerMethod } from 'fastify'
import FoodDayRepository from '../../../repositories/FoodDay'

const fetchAllFoodDaysHandler: RouteHandlerMethod = async (req, res) => {
  const foodDayRepository = req.container.get(FoodDayRepository)

  try {
    const { data, count } = await foodDayRepository.fetchAllFoodDays({ user: req.user, page: 1 })

    return res.send({
      data,
      count,
    })
  } catch (error) {
    return res.send(error)
  }
}

export default fetchAllFoodDaysHandler

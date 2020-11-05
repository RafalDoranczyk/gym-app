import { RouteHandlerMethod } from 'fastify'
import MealRepository from '../../../repositories/Meal'
import { FetchAllMealsByTypeRequest } from '../interfaces'

const fetchAllIngredientsHandler: RouteHandlerMethod = async (req: FetchAllMealsByTypeRequest, res) => {
  const mealRepository = req.container.get(MealRepository)
  const { page, filterString } = req.query

  try {
    const { data, count } = await mealRepository.fetchMealsByType({ user: req.user, page, filterString })

    return res.send({
      data,
      count,
    })
  } catch (error) {
    console.log(error)
  }
}

export default fetchAllIngredientsHandler

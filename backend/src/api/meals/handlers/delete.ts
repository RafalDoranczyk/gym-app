import { RouteHandlerMethod } from 'fastify'
import MealRepository from '../../../repositories/Meal'
import { DeleteQueryInterface } from '../../ingredients/interfaces'

const deleteMealHandler :RouteHandlerMethod = async (req: DeleteQueryInterface, res) => {
  const mealRepository = req.container.get(MealRepository)
  const { id } = req.query

  try {
    await mealRepository.delete({ id })

    return res
      .status(200)
      .send({ message: 'You\'ve succesfully deleted an meal', id })
  } catch (error) {
    console.log(error)

    return res.code(400).send(error)
  }
}

export default deleteMealHandler

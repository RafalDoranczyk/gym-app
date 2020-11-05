import { RouteHandlerMethod } from 'fastify'
import IngredientRepository from '../../../repositories/Ingredient'
import { DeleteQueryInterface } from '../interfaces'

const deleteIngredientHandler :RouteHandlerMethod = async (req: DeleteQueryInterface, res) => {
  const ingredientsRepository = req.container.get(IngredientRepository)
  const { id } = req.query

  try {
    await ingredientsRepository.delete({ id })

    return res.status(200)
      .send({ message: 'You\'ve succesfully deleted an ingredient', id })
  } catch (error) {
    console.log(error)

    return res.code(400).send(error)
  }
}

export default deleteIngredientHandler

import { RouteHandlerMethod } from 'fastify'
import IngredientRepository from '../../../repositories/Ingredient'
import { UpdateQueryInterface } from '../interfaces'

const updateIngredientHandler :RouteHandlerMethod = async (req: UpdateQueryInterface, res) => {
  const ingredientsRepository = req.container.get(IngredientRepository)

  try {
    const updatedIngredient = await ingredientsRepository.save({ ...req.body })

    return res
      .status(200)
      .send({
        message: 'You\'ve succesfully updated an ingredient',
        data:    updatedIngredient,
      })
  } catch (error) {
    console.log(error)

    return res.code(400).send(error)
  }
}

export default updateIngredientHandler

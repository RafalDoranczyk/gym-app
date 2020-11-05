import { RouteHandlerMethod } from 'fastify'
import IngredientRepository from '../../../repositories/Ingredient'
import { CreateUserIngredientRequest } from '../interfaces'

const createIngredientHandler : RouteHandlerMethod = async (req : CreateUserIngredientRequest, res) => {
  const ingredientRepository = req.container.get(IngredientRepository)

  try {
    const savedIngredient = await ingredientRepository.createNewIngredient({ ...req.body, user: req.user })

    return res.status(201).send({
      data:    savedIngredient,
      message: 'You\'ve created an ingredient!',
    })
  } catch (error) {
    console.log(error)

    return res.code(400).send()
  }
}

export default createIngredientHandler

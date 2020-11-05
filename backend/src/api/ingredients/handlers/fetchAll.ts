import { RouteHandlerMethod } from 'fastify'
import IngredientRepository from '../../../repositories/Ingredient'
import { FetchAllIngredientsByTypeRequest } from '../interfaces'

const fetchAllIngredientsHandler: RouteHandlerMethod = async (req: FetchAllIngredientsByTypeRequest, res) => {
  const ingredientRepository = req.container.get(IngredientRepository)
  const { filterString, page, name, idsToOmit } = req.query

  const shouldFetchBySourceType = filterString && page

  try {
    if (shouldFetchBySourceType) {
      const { data, count } = await ingredientRepository.fetchIngredientsBySource({
        user: req.user,
        page,
        filterString,
      })

      return res.send({
        data,
        count,
      })
    }

    const data = await ingredientRepository.fetchIngredientsByLetter({
      user: req.user,
      name,
      idsToOmit,
    })

    return res
      .send({ data })
  } catch (error) {
    console.log(error)
  }
}

export default fetchAllIngredientsHandler

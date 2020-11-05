import { FastifySchema } from 'fastify/types/schema'
import { availableCountTypes, availableSourceTypes, INGREDIENT_NAME_MAX_LENGTH, INGREDIENT_NAME_MIN_LENGTH } from '../../../entities/Ingredient'

const createIngredientSchema: FastifySchema = {
  body: {
    required:   ['name', 'sourceType', 'countType', 'kcal', 'carbs', 'protein', 'fat', 'price'],
    type:       'object',
    properties: {
      name: {
        type:      'string',
        minLength: INGREDIENT_NAME_MIN_LENGTH,
        maxLength: INGREDIENT_NAME_MAX_LENGTH,
      },
      sourceType: {
        type: 'string',
        enum: availableSourceTypes,
      },
      countType: {
        type: 'string',
        enum: availableCountTypes,
      },
      kcal: {
        type: 'number',
      },
      carbs: {
        type: 'number',
      },
      protein: {
        type: 'number',
      },
      fat: {
        type: 'number',
      },
      price: {
        type: 'number',
      },
      id: {
        type: 'number',
      },
    },
  },
}

export default createIngredientSchema

import { FastifySchema } from 'fastify/types/schema'
import { MEAL_NAME_MIN_LENGTH, MEAL_NAME_MAX_LENGTH, MEAL_DESCRIPTION_MIN_LENGTH } from '../../../entities/Meal'

const createMealSchema: FastifySchema = {
  body: {
    type:       'object',
    required:   ['name', 'description', 'mealTypes', 'ingredientsForNewMeal'],
    properties: {
      name: {
        type:      'string',
        minLength: MEAL_NAME_MIN_LENGTH,
        maxLength: MEAL_NAME_MAX_LENGTH,
      },
      description: {
        type:      'string',
        minLength: MEAL_DESCRIPTION_MIN_LENGTH,
      },
      mealTypes: {
        type:     'array',
        minItems: 1,
        items:    [
          { type: 'string' },
        ],
      },
      ingredientsForNewMeal: {
        type:     'array',
        minItems: 1,
        items:    [
          {
            type:       'object',
            required:   ['id', 'multiplier'],
            properties: {
              id: {
                type: 'number',
              },
              multiplier: {
                type: 'number',
              },
            },
          },
        ],
      },
    },

  },
}
export default createMealSchema

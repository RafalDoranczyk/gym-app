import { FastifySchema } from 'fastify/types/schema'
import { ingredientSchema } from './fetchAll'

const updateIngredientSchema : FastifySchema = {
  response: {
    200: {
      type:       'object',
      properties: {
        data: {
          type:       'object',
          properties: ingredientSchema,
        },
        message: {
          type: 'string',
        },
      },
    },
  },
}

export default updateIngredientSchema

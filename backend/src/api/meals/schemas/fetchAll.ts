import { FastifySchema } from 'fastify/types/schema'
import { ingredientSchema } from '../../ingredients/schemas/fetchAll'

const fetchAllMealsSchema : FastifySchema = {
  response: {
    200: {
      type:       'object',
      properties: {
        data: {
          type:  'array',
          items: {
            type:       'object',
            properties: {
              id: {
                type: 'number',
              },
              createdAt: {
                type: 'string',
              },
              updatedAt: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              description: {
                type: 'string',
              },
              mealTypes: {
                type:  'array',
                items: {
                  type: 'string',
                },
              },
              ingredients: {
                type:  'array',
                items:
                  {
                    type:       'object',
                    properties: {
                      id: {
                        type: 'number',
                      },
                      multiplier: {
                        type: 'number',
                      },
                      ingredient: {
                        type:       'object',
                        properties: ingredientSchema,
                      },
                    },
                  },
              },
            },
          },
        },
        count: {
          type: 'number',
        },
      },
    },
  },
}

export default fetchAllMealsSchema

import { FastifySchema } from 'fastify/types/schema'

export const ingredientSchema = {
  id: {
    type: 'number',
  },
  name: {
    type: 'string',
  },
  sourceType: {
    type: 'string',
  },
  countType: {
    type: 'string',
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
}

const fetchAllIngredientsSchema : FastifySchema = {
  querystring: {
    type:       'object',
    properties: {
      page: {
        type: 'number',
      },
      sourceType: {
        type: 'string',
      },
      idsToOmit: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    },
  },
  response: {
    200: {
      type:       'object',
      properties: {
        data: {
          type:  'array',
          items: {
            type:       'object',
            properties: ingredientSchema,
          },
        },
        count: {
          type: 'number',
        },
      },
    },
  },
}

export default fetchAllIngredientsSchema

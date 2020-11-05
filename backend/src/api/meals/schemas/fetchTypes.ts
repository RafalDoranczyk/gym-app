import { FastifySchema } from 'fastify/types/schema'

const fetchMealTypesSchema : FastifySchema = {
  response: {
    200: {
      type:       'object',
      properties: {
        data: {
          type:  'array',
          items: {
            type: 'string',
          },
        },
      },
    },
  },
}

export default fetchMealTypesSchema

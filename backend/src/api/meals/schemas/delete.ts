import { FastifySchema } from 'fastify/types/schema'

const deleteMealSchema : FastifySchema = {
  querystring: {
    type:       'object',
    properties: {
      id: {
        type: 'number',
      },
    },
  },
  response: {
    200: {
      type:       'object',
      properties: {
        message: {
          type: 'string',
        },
        id: {
          type: 'number',
        },
      },
    },
  },
}

export default deleteMealSchema

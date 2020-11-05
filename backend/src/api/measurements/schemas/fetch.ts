import { FastifySchema } from 'fastify/types/schema'

const fetchMeasurementsSchema: FastifySchema = {
  querystring: {
    type:       'object',
    properties: {
      createdAt: {
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
            properties: {
              weight: {
                type: 'number',
              },
              waist: {
                type: 'number',
              },
              thigh: {
                type: 'number',
              },
              createdAt: {
                type: 'string',
              },
              chest: {
                type: 'number',
              },
              calf: {
                type: 'number',
              },
              biceps: {
                type: 'number',
              },
            },
          },
        },
      },
    },
  },
}

export default fetchMeasurementsSchema

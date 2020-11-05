import { FastifySchema } from 'fastify/types/schema'

const createMeasurementSchema: FastifySchema = {
  body: {
    required:   ['createdAt', 'weight', 'biceps', 'chest', 'thigh', 'calf', 'waist'],
    type:       'object',
    properties: {
      createdAt: {
        type: 'string',
      },
      weight: {
        type: 'number',
      },
      biceps: {
        type: 'number',
      },
      chest: {
        type: 'number',
      },
      thigh: {
        type: 'number',
      },
      calf: {
        type: 'number',
      },
      waist: {
        type: 'number',
      },
    },
  },
}

export default createMeasurementSchema

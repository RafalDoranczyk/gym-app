import { FastifySchema } from 'fastify'
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from '../../../entities/User'

const loginUserSchema : FastifySchema = {
  body: {
    required:   ['email', 'password'],
    type:       'object',
    properties: {
      email: {
        type:   'string',
        format: 'email',
      },
      password: {
        type:      'string',
        minLength: PASSWORD_MIN_LENGTH,
        maxLength: PASSWORD_MAX_LENGTH,
      },
    },
  },
  response: {
    headers: {
      type:       'object',
      properties: {
        authorization: {
          type: 'string',
        },
      },
    },
  },
}

export default loginUserSchema

import { FastifySchema } from 'fastify'
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH, USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH } from '../../../entities/User'

const signupUserSchema : FastifySchema = {
  body: {
    required:   ['username', 'email', 'password', 'password2'],
    type:       'object',
    properties: {
      username: {
        type:         'string',
        minLength:    USERNAME_MIN_LENGTH,
        maxLength:    USERNAME_MAX_LENGTH,
        errorMessage: {
          type:       'size should be a number',
          minimum:    'size should be bigger or equal to 4',
          multipleOf: 'size should be even',
          message:    'size should be an even number, greater or equal than 4',
        },
      },
      email: {
        type:   'string',
        format: 'email',
      },
      password: {
        type:      'string',
        minLength: PASSWORD_MIN_LENGTH,
        maxLength: PASSWORD_MAX_LENGTH,
      },
      password2: {
        const: {
          $data: '1/password',
        },
        type: 'string',
      },
    },
  },
}

export default signupUserSchema

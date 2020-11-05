import { interfaces } from 'inversify'
import User from './entities/User'

declare module 'fastify' {
  interface FastifyRequest {
    container: interfaces.Container
    user: User
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVICE_PORT: string
      SERVICE_HOST: string
      DB_NAME: string
      DB_PORT: string
      DB_HOST: string
      DB_USER: string
      DB_PASSWORD: string
      JWT_KEY: string
      JWT_ACCESS_TOKEN_EXPIRES_SECONDS: string
      JWT_REFRESH_TOKEN_EXPIRES_SECONDS: string
    }
  }
}

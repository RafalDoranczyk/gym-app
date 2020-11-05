import { FastifyRequest } from 'fastify'

export interface LoginUserInterface {
    email: string
    password: string
}

export interface SignupUserInterface extends LoginUserInterface {
    username: string
    password2: string
}

export interface LoginUserRequest extends FastifyRequest{
    body: LoginUserInterface
}

export interface SignupUserRequest extends FastifyRequest {
    body: SignupUserInterface
}

export interface RefreshTokenRequest extends FastifyRequest {
    body: {
      refreshToken: string
    }
}

import { FastifyRequest } from 'fastify'
import { CountTypes, SourceTypes } from '../../entities/Ingredient'
import User from '../../entities/User'

export interface FetchAllIngredientsByTypeInterface {
  filterString: SourceTypes
  page: number
  name: string
  idsToOmit: string
}

export interface FetchAllIngredientsByTypeRequest extends FastifyRequest {
  query: FetchAllIngredientsByTypeInterface
}

export interface CreateUserIngredientInterface {
  user?: User
  name: string
  kcal: number
  carbs: number
  protein: number
  fat: number
  price: number
  sourceType: SourceTypes
  countType: CountTypes
}

export interface CreateUserIngredientRequest extends FastifyRequest {
  body: CreateUserIngredientInterface
}

export interface DeleteQueryInterface extends FastifyRequest {
  query : {
    id: number
  }
}

export interface UpdateQueryInterface extends FastifyRequest {
  body: {
    id: number
    name: string
    kcal: number
    carbs: number
    protein: number
    fat: number
    price: number
  }
}

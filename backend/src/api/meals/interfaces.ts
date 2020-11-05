import { FastifyRequest } from 'fastify'
import { MealTypes } from '../../entities/Meal'
import User from '../../entities/User'

export interface IngredientForMealInterface {
    id: number
    multiplier: number
}

export interface CreateMealInterface {
    name: string
    description: string
    mealTypes: MealTypes[]
    ingredientsForNewMeal: IngredientForMealInterface[]
    user?: User
}

export interface CreateMealRequest extends FastifyRequest {
    body: CreateMealInterface
}

export interface FetchAllMealsByTypeInterface {
    filterString: MealTypes
    page: number
}

export interface FetchAllMealsByTypeRequest extends FastifyRequest{
    query: FetchAllMealsByTypeInterface
}

import { FastifyRequest } from 'fastify'

export interface CreateFoodDayBody{
    name: string
    mealsToFoodDay: [
        {name: string
        time: string
    ingredients: [
        {multiplier: number
        id: number}
    ]}
    ]
}

export interface CreateFoodDayRequest extends FastifyRequest {
    body: CreateFoodDayBody
}

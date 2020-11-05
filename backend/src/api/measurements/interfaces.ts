import { FastifyRequest } from 'fastify'
import Measurement from '../../entities/Measurement'

export type CreateOrUpdateMeasurementBody = Omit<Measurement, 'user' | 'id'>

export interface FetchMeasurementsRequest extends FastifyRequest {
   query: {
    createdAt:string
   }
}

export interface CreateMeasurementRequest extends FastifyRequest {
    body: CreateOrUpdateMeasurementBody
}

export interface UpdateMeasurementRequest extends FastifyRequest {
    body: CreateOrUpdateMeasurementBody
}

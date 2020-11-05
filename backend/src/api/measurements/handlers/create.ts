import { RouteHandlerMethod } from 'fastify'
import MeasurementRepository from '../../../repositories/Measurement'
import { CreateMeasurementRequest } from '../interfaces'

const createMeasurementsHandler: RouteHandlerMethod = async (req: CreateMeasurementRequest, res) => {
  const measurementsRepository = req.container.get(MeasurementRepository)

  try {
    const data = await measurementsRepository.createOrUpdateMeasurement({ ...req.body, user: req.user })

    return res.send({
      data,
      message: 'Measurements updated!',
    })
  } catch (error) {
    console.log(error)

    return res.send(error)
  }
}

export default createMeasurementsHandler

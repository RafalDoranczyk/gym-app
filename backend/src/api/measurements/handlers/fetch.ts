import { RouteHandlerMethod } from 'fastify'
import MeasurementRepository from '../../../repositories/Measurement'
import { FetchMeasurementsRequest } from '../interfaces'

const fetchMeasurementsHandler: RouteHandlerMethod = async (req: FetchMeasurementsRequest, res) => {
  const measurementsRepository = req.container.get(MeasurementRepository)

  try {
    const userMeasurements = await measurementsRepository.find({
      where: {
        user: req.user,
      },
      order: {
        createdAt: 'DESC',
      },
    })

    return res.send({
      data: userMeasurements,
    })
  } catch (error) {
    console.log(error)

    return res.send(error)
  }
}

export default fetchMeasurementsHandler

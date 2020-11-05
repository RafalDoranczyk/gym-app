import { EntityRepository, Repository } from 'typeorm'
import { injectable } from 'inversify'
import Measurement from '../entities/Measurement'
import User from '../entities/User'

@injectable()
@EntityRepository(Measurement)
export default class MealRepository extends Repository<Measurement> {
  async createOrUpdateMeasurement(values: Measurement): Promise<Measurement> {
    const { weight, biceps, chest, thigh, calf, waist, user, createdAt } = values

    let measurement = await this.findOne({ createdAt: values.createdAt, user })

    if (!measurement) {
      measurement = this.create()
      measurement.user = user
    }

    measurement.createdAt = createdAt
    measurement.weight = weight
    measurement.biceps = biceps
    measurement.chest = chest
    measurement.thigh = thigh
    measurement.calf = calf
    measurement.waist = waist

    await this.save(measurement)

    return measurement
  }

  async createFreshMeasurement(user:User): Promise<void> {
    const measurement = this.create()
    measurement.user = user
    measurement.weight = 0
    measurement.biceps = 0
    measurement.chest = 0
    measurement.thigh = 0
    measurement.calf = 0
    measurement.waist = 0

    await this.save(measurement)
  }
}

import { EntityRepository, Repository } from 'typeorm'
import { injectable } from 'inversify'
import User from '../entities/User'
import FoodDay from '../entities/FoodDay'
import MealToFoodDayRepository from './MealToFoodDay'

interface FetchFoodDays {
    user: User
    page: number
}

interface FetchFoodDaysReturn {
    data: FoodDay[]
    count: number
}

interface CreateFoodDay {
  name: string
  user: User
  mealsToFoodDay: [
    {
      name: string
     time: string
  ingredients: [
    {multiplier: number
    id: number}
  ]}
  ]
}

const TAKE = 10

@injectable()
@EntityRepository(FoodDay)
export default class FoodDayRepository extends Repository<FoodDay> {
  async fetchAllFoodDays({ user, page }: FetchFoodDays): Promise<FetchFoodDaysReturn> {
    const [data, count] = await this.findAndCount({
      where:
        {
          user,
        },
      skip: (page * TAKE) - TAKE,
      take: TAKE,
    })

    return {
      data,
      count: Math.ceil(count / TAKE),
    }
  }

  async createNewFoodDay(values: CreateFoodDay): Promise<FoodDay> {
    const { name, mealsToFoodDay, user } = values
    try {
      const meals = await this.manager
        .getCustomRepository(MealToFoodDayRepository)
        .createManyMealsToFoodDay(mealsToFoodDay)

      const foodDay = this.create({ name, user, mealsToFoodDay: meals })

      await this.save(foodDay)

      console.log(foodDay)

      return foodDay
    } catch (error) {
      console.log(error)

      return Promise.reject(error)
    }
  }
}

import { EntityRepository, Like, Repository } from 'typeorm'
import { injectable } from 'inversify'
import Meal, { MealTypes } from '../entities/Meal'
import { CreateMealInterface } from '../api/meals/interfaces'
import IngredientToMealRepository from './IngredientToMeal'
import User from '../entities/User'

interface FetchMealsByType {
  user: User
  page: number
  filterString: MealTypes
}

interface FetchMealsByTypeReturn {
  data: Meal[]
  count: number
}

const TAKE = 10

@injectable()
@EntityRepository(Meal)
export default class MealRepository extends Repository<Meal> {
  async createNewMeal(values: CreateMealInterface): Promise<Meal> {
    const {
      name, description, mealTypes, ingredientsForNewMeal, user,
    } = values

    const ingredients = await this.manager
      .getCustomRepository(IngredientToMealRepository)
      .createManyIngredientsToMeal(ingredientsForNewMeal)

    const meal = this.create({
      name,
      description,
      mealTypes,
      user,
      ingredients,
    })
    await this.save(meal)

    return meal
  }

  async fetchMealsByType({ user, filterString, page }: FetchMealsByType): Promise<FetchMealsByTypeReturn> {
    const [data, count] = await this.findAndCount({
      where:
      {
        user,
        mealTypes: Like(`%${filterString}%`),
      },
      relations: ['ingredients'],
      skip:      (page * TAKE) - TAKE,
      take:      TAKE,
    })

    return {
      data,
      count: Math.ceil(count / TAKE),
    }
  }
}

import { EntityRepository, Repository } from 'typeorm'
import { injectable } from 'inversify'
import MealToFoodDay from '../entities/MealToFoodDay'
import IngredientToFoodDayMealRepository from './IngredientToFoodDayMeal'
import { IngredientForMealInterface } from '../api/meals/interfaces'

@injectable()
@EntityRepository(MealToFoodDay)
export default class MealToFoodDayRepository extends Repository<MealToFoodDay> {
  async createMealToFoodDay(values: {name:string; time:string; ingredients: IngredientForMealInterface[]}): Promise<MealToFoodDay> {
    const { name, time, ingredients } = values

    const mealIngredients = await this.manager
      .getCustomRepository(IngredientToFoodDayMealRepository)
      .createManyIngredientsToMeal(ingredients)

    try {
      const mealToFoodDay = this.create({
        name,
        time,
        ingredients: mealIngredients,
      })

      await this.save(mealToFoodDay)

      return mealToFoodDay
    } catch (error) {
      console.log(error)

      return Promise.reject(error)
    }
  }

  async createManyMealsToFoodDay(mealsToConnect: {name:string; time:string; ingredients: IngredientForMealInterface[]}[]):Promise<MealToFoodDay[]> {
    const mealsToFoodDay : MealToFoodDay[] = []

    for (const meal of mealsToConnect) {
      const mealToFoodDay = await this.createMealToFoodDay(meal)
      mealsToFoodDay.push(mealToFoodDay)
    }

    return mealsToFoodDay
  }
}

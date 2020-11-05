import IngredientToFoodDayMeal from '../entities/IngredientToFoodDayMeal'
import { EntityRepository, Repository } from 'typeorm'
import { injectable } from 'inversify'
import { IngredientForMealInterface } from '../api/meals/interfaces'
import IngredientRepository from './Ingredient'

@injectable()
@EntityRepository(IngredientToFoodDayMeal)
export default class IngredientToMealRepository extends Repository<IngredientToFoodDayMeal> {
  async createIngredientToMeal(ingredientToConnect : IngredientForMealInterface): Promise<IngredientToFoodDayMeal> {
    const ingredient = await this.manager
      .getCustomRepository(IngredientRepository)
      .findOne(ingredientToConnect.id)

    const ingredientToMeal = this.create({
      multiplier: ingredientToConnect.multiplier,
      ingredient,
    })
    await this.save(ingredientToMeal)

    return ingredientToMeal
  }

  async createManyIngredientsToMeal(ingredientsToConnect: IngredientForMealInterface[]): Promise<IngredientToFoodDayMeal[]> {
    const ingredientsToMeals : IngredientToFoodDayMeal[] = []
    for (const ing of ingredientsToConnect) {
      const ingredientToMeal = await this.createIngredientToMeal(ing)
      ingredientsToMeals.push(ingredientToMeal)
    }

    return ingredientsToMeals
  }
}

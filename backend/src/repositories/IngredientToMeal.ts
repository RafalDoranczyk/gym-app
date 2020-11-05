import IngredientToMeal from '../entities/IngredientToMeal'
import { EntityRepository, Repository } from 'typeorm'
import { injectable } from 'inversify'
import { IngredientForMealInterface } from '../api/meals/interfaces'
import IngredientRepository from './Ingredient'

@injectable()
@EntityRepository(IngredientToMeal)
export default class IngredientToMealRepository extends Repository<IngredientToMeal> {
  async createIngredientToMeal(ingredientToConnect : IngredientForMealInterface): Promise<IngredientToMeal> {
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

  async createManyIngredientsToMeal(ingredientsToConnect: IngredientForMealInterface[]): Promise<IngredientToMeal[]> {
    const ingredientsToMeals : IngredientToMeal[] = []
    for (const ing of ingredientsToConnect) {
      const ingredientToMeal = await this.createIngredientToMeal(ing)
      ingredientsToMeals.push(ingredientToMeal)
    }

    return ingredientsToMeals
  }
}

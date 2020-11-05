import { AsyncContainerModule } from 'inversify'
import { createConnection, ConnectionOptions } from 'typeorm'

import User from '../entities/User'
import Ingredient from '../entities/Ingredient'
import Meal from '../entities/Meal'
import IngredientToMeal from '../entities/IngredientToMeal'
import FoodDay from '../entities/FoodDay'
import MealToFoodDay from '../entities/MealToFoodDay'
import IngredientToFoodDayMeal from '../entities/IngredientToFoodDayMeal'
import Measurement from '../entities/Measurement'

import UserRepository from '../repositories/User'
import IngredientRepository from '../repositories/Ingredient'
import MealRepository from '../repositories/Meal'
import FoodDayRepository from '../repositories/FoodDay'
import MeasurementRepository from '../repositories/Measurement'

const getDbConnection = async () => {
  const { DB_NAME, DB_PORT, DB_HOST, DB_USER, DB_PASSWORD } = process.env
  const options: ConnectionOptions = {
    type:     'postgres',
    host:     DB_HOST,
    port:     +DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,

  }

  return await createConnection({
    ...options,
    database: `${options.database}`,
    entities: [User, Ingredient, Meal, Measurement, IngredientToMeal,
      FoodDay, MealToFoodDay, IngredientToFoodDayMeal],
    migrations:  ['../migrations/*.ts'],
    // dropSchema:  true,
    synchronize: true,
  })
}

export default new AsyncContainerModule(async (bind) => {
  const connection = await getDbConnection()

  const ingredientsRepository = connection.getCustomRepository(IngredientRepository)
  const userRepository = connection.getCustomRepository(UserRepository)
  const mealRepository = connection.getCustomRepository(MealRepository)
  const foodDayRepository = connection.getCustomRepository(FoodDayRepository)
  const measurementRepository = connection.getCustomRepository(MeasurementRepository)

  bind(IngredientRepository).toConstantValue(ingredientsRepository)
  bind(UserRepository).toConstantValue(userRepository)
  bind(MealRepository).toConstantValue(mealRepository)
  bind(FoodDayRepository).toConstantValue(foodDayRepository)
  bind(MeasurementRepository).toConstantValue(measurementRepository)
})

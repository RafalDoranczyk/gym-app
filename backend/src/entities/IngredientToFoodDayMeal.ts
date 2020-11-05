import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Ingredient from './Ingredient'
import MealToFoodDay from './MealToFoodDay'

@Entity()
export default class IngredientToFoodDayMeal {
  @PrimaryGeneratedColumn()
  public id: number

  @Column('decimal', { precision: 5, scale: 1 })
  public multiplier! : number;

  @ManyToOne(() => Ingredient, ingredient => ingredient.ingredientToMeals, { cascade: true, eager: true, onDelete: 'CASCADE' })
  public ingredient!: Ingredient;

  @ManyToOne(() => MealToFoodDay, mealToFoodDay => mealToFoodDay.ingredients, { cascade: true, onDelete: 'CASCADE' })
  public mealToFoodDay: MealToFoodDay;
}

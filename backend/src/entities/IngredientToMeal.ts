import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Ingredient from './Ingredient'
import Meal from './Meal'

@Entity()
export default class IngredientToMeal {
  @PrimaryGeneratedColumn()
  public id: number

  @Column('decimal', { precision: 5, scale: 1 })
  public multiplier! : number;

  @ManyToOne(() => Ingredient, ingredient => ingredient.ingredientToMeals, { cascade: true, eager: true, onDelete: 'CASCADE' })
  public ingredient!: Ingredient;

  @ManyToOne(() => Meal, meal => meal.ingredients, { cascade: true, onDelete: 'CASCADE' })
  public meal?: Meal;
}

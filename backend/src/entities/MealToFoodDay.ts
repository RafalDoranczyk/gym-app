import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import FoodDay from './FoodDay'
import IngredientToFoodDayMeal from './IngredientToFoodDayMeal'

@Entity()
export default class MealToFoodDay {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column()
  public name: string

  @Column()
  public time!: string;

  @OneToMany(() => IngredientToFoodDayMeal, ingredientToFoodDayMeal => ingredientToFoodDayMeal.mealToFoodDay, { onDelete: 'CASCADE', eager: true })
  public ingredients!: IngredientToFoodDayMeal[];

  @ManyToOne(() => FoodDay, foodDay => foodDay.mealsToFoodDay, { cascade: true, onDelete: 'CASCADE' })
  public foodDay!: FoodDay;
}

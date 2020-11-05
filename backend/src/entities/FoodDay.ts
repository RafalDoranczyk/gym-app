import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { Length } from 'class-validator'
import User from './User'
import MealToFoodDay from './MealToFoodDay'

export const FOOD_DAY_NAME_MIN_LENGTH = 3
export const FOOD_DAY_NAME_MAX_LENGTH = 128

@Entity()
export default class FoodDay {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ name: 'created_at', type: 'date', default: () => 'now()' })
  public createdAt: Date;

  @Length(FOOD_DAY_NAME_MIN_LENGTH, FOOD_DAY_NAME_MAX_LENGTH)
  @Column({ length: FOOD_DAY_NAME_MAX_LENGTH })
  public name!: string;

  @OneToMany(() => MealToFoodDay, mealToFoodDay => mealToFoodDay.foodDay, { onDelete: 'CASCADE', eager: true })
  public mealsToFoodDay: MealToFoodDay[];

  @ManyToOne(() => User, user => user.ingredients, { cascade: true, onDelete: 'CASCADE' })
  public user: User;
}

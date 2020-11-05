import { Length, MinLength } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm'
import IngredientToMeal from './IngredientToMeal'
import User from './User'

export type MealTypes = 'breakfast' | 'lunch' | 'dinner'| 'supper' | 'snack'
export const availableMealTypes : MealTypes[] = ['breakfast', 'lunch', 'dinner', 'supper', 'snack']

export const MEAL_NAME_MIN_LENGTH = 6
export const MEAL_NAME_MAX_LENGTH = 128
export const MEAL_DESCRIPTION_MIN_LENGTH = 4

@Entity()
export default class Meal {
  @PrimaryGeneratedColumn()
  public id?: number

  @Column({ name: 'created_at', type: 'date', default: () => 'now()' })
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt?: Date;

  @Length(MEAL_NAME_MIN_LENGTH, MEAL_NAME_MAX_LENGTH)
  @Column({ length: MEAL_NAME_MAX_LENGTH })
  public name!: string;

  @MinLength(MEAL_DESCRIPTION_MIN_LENGTH)
  @Column()
  public description!: string;

  @Column('simple-array')
  public mealTypes!: MealTypes[]

  @ManyToOne(() => User, user => user.meals, { cascade: true, onDelete: 'CASCADE' })
  public user!: User;

  @OneToMany(() => IngredientToMeal, ingredientToMeal => ingredientToMeal.meal, { onDelete: 'CASCADE' })
  public ingredients!: IngredientToMeal[];
}

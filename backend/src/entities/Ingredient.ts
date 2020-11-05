import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm'
import { Length } from 'class-validator'
import User from './User'
import IngredientToMeal from './IngredientToMeal'
import IngredientToFoodDayMeal from './IngredientToFoodDayMeal'

export type SourceTypes = 'carbohydrates' | 'proteins'| 'fats'| 'proteins and fats'| 'drinks' | 'fruits'
export type CountTypes ='1 piece'| '100g'| '1kg'

export const INGREDIENT_NAME_MIN_LENGTH = 3
export const INGREDIENT_NAME_MAX_LENGTH = 24

export const availableSourceTypes : SourceTypes[] = ['carbohydrates', 'proteins', 'fats', 'proteins and fats', 'drinks', 'fruits']
export const availableCountTypes : CountTypes[] = ['1 piece', '100g', '1kg']

@Entity()
export default class Ingredient {
  @PrimaryGeneratedColumn()
  public id?: number

  @Column({ name: 'created_at', type: 'date', default: () => 'now()' })
  public createdAt!: Date;

  @Column()
  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt?: Date;

  @Length(INGREDIENT_NAME_MIN_LENGTH, INGREDIENT_NAME_MAX_LENGTH)
  @Column({ length: INGREDIENT_NAME_MAX_LENGTH })
  public name!: string;

  @Column('decimal', { precision: 5, scale: 1 })
  public kcal!: number;

  @Column('decimal', { precision: 5, scale: 1 })
  public carbs!: number;

  @Column('decimal', { precision: 5, scale: 1 })
  public protein!: number;

  @Column('decimal', { precision: 5, scale: 1 })
  public fat!: number;

  @Column('decimal', { precision: 5, scale: 1 })
  public price!: number

  @Column({ type: 'enum', enum: availableSourceTypes })
  public sourceType!: SourceTypes

  @Column({ type: 'enum', enum: availableCountTypes })
  public countType!: CountTypes

  @ManyToOne(() => User, user => user.ingredients, { cascade: true, onDelete: 'CASCADE' })
  public user?: User;

  @OneToMany(() => IngredientToMeal, ingredientToMeal => ingredientToMeal.ingredient, { onDelete: 'CASCADE' })
  public ingredientToMeals?: IngredientToMeal[];

  @OneToMany(() => IngredientToFoodDayMeal, ingredientToFoodDayMeal => ingredientToFoodDayMeal.ingredient, { onDelete: 'CASCADE' })
  public ingredientToFoodDayMeals?: IngredientToFoodDayMeal[];
}

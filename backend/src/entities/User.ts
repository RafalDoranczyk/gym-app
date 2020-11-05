import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  Unique, OneToMany,
} from 'typeorm'
import { IsEmail, Length } from 'class-validator'
import Ingredient from './Ingredient'
import Meal from './Meal'
import Measurement from './Measurement'
import FoodDay from './FoodDay'

export const USERNAME_MIN_LENGTH = 3
export const USERNAME_MAX_LENGTH = 24
export const PASSWORD_MIN_LENGTH = 6
export const PASSWORD_MAX_LENGTH = 128

@Entity()
@Unique(['email'])
export default class User {
  @PrimaryGeneratedColumn('uuid')
  public id?: string

  @Column({ name: 'created_at', default: () => 'now()' })
  public createdAt?: Date;

  @Column()
  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt?: Date;

  @IsEmail()
  @Column()
  public email!: string

  @Length(USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH)
  @Column({ length: USERNAME_MAX_LENGTH })
  public username!: string;

  @Length(PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH)
  @Column({ length: PASSWORD_MAX_LENGTH })
  public password!: string;

  @OneToMany(() => Ingredient, ingredient => ingredient.user, { onDelete: 'CASCADE' })
  public ingredients?: Ingredient[];

  @OneToMany(() => Meal, meal => meal.user, { onDelete: 'CASCADE' })
  public meals?: Meal[]

  @OneToMany(() => FoodDay, foodDay => foodDay.user, { onDelete: 'CASCADE' })
  public foodDays?: FoodDay[]

  @OneToMany(() => Measurement, measurement => measurement.user, { onDelete: 'CASCADE' })
  public measurements?: Measurement[]
}

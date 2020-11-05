import Ingredient, { SourceTypes } from '../entities/Ingredient'
import { EntityRepository, In, IsNull, Like, Not, Repository } from 'typeorm'
import { injectable } from 'inversify'
import { CreateUserIngredientInterface } from '../api/ingredients/interfaces'
import User from '../entities/User'

export interface FetchIngredientsBySource {
  user: User
  filterString: SourceTypes
  page: number
}

export interface FetchIngredientsBySourceResponse {
  data: Ingredient[] | []
  count: number
}

export interface FetchIngredientsByLetter{
  name: string
  user: User
  idsToOmit: string
}

export type FetchIngredientsByLetterResponse= Ingredient[]

const TAKE = 10

@injectable()
@EntityRepository(Ingredient)
export default class IngredientRepository extends Repository<Ingredient> {
  public async createNewIngredient(values: CreateUserIngredientInterface): Promise<Ingredient> {
    const { name, kcal, carbs, protein, fat, price, sourceType, countType, user } = values

    const ingredient = this.create({
      name: name.toLowerCase(),
      kcal,
      carbs,
      protein,
      fat,
      price,
      sourceType,
      countType,
      user,
    })

    await this.save(ingredient)

    return ingredient
  }

  public async fetchIngredientsBySource({ user, filterString, page }:FetchIngredientsBySource):Promise<FetchIngredientsBySourceResponse> {
    const [data, count] = await this.findAndCount({
      where:
      {
        user,
        sourceType: filterString,
      },
      skip: (page * TAKE) - TAKE,
      take: TAKE,
    })

    return {
      data,
      count: Math.ceil(count / TAKE),
    }
  }

  public async fetchIngredientsByLetter({ user, name, idsToOmit }:FetchIngredientsByLetter):Promise<FetchIngredientsByLetterResponse> {
    const data = await this.find({
      where: {
        user,
        name: Like(`%${name}%`),
        id:   idsToOmit ? Not(In(JSON.parse(idsToOmit))) : Not(IsNull()),
      },

    })

    return data
  }
}

import { Ingredient } from "store/ingredientsReducer/interfaces/reducer";

export interface MealsReducerState {
  readonly mealTypes: MealTypes;
  readonly userMeals: UserMeals;
  readonly ingredientsForNewMeal: IngredientForNewMeal[];
}

export type MealTypes = string[];

export interface UserMeals {
  readonly data: Meal[];
  readonly count: number;
}

export interface Meal {
  readonly id: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly name: string;
  readonly description: string;
  readonly mealTypes: MealTypes;
  readonly ingredients: MealIngredient[];
}

export interface MealIngredient {
  readonly id: number;
  readonly multiplier: number;
  readonly ingredient: Ingredient;
}

export type IngredientForNewMeal = Omit<MealIngredient, "id">;

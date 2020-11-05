import { Ingredient } from "store/ingredientsReducer/interfaces/reducer";
import * as I from "store/mealsReducer/interfaces/reducer";

export interface FetchMealTypesResponse {
  data: string[];
}

export interface FetchUserMealsRequest {
  filterString: string;
  page: number;
}

export type FetchUserMealsResponse = I.UserMeals;

export type CreateUserMealRequest = {
  name: string;
  description: string;
  mealTypes: I.MealTypes;
  ingredientsForNewMeal: IngredientsForNewMealRequest[];
};

export type IngredientsForNewMealRequest = {
  id: Ingredient["id"];
  multiplier: number;
};

export interface CreateUserMealResponse {
  data: I.Meal;
  message: string;
}

export interface DeleteUserMealRequest {
  id: I.Meal["id"];
}

export interface DeleteUserMealResponse {
  id: I.Meal["id"];
  message: string;
}

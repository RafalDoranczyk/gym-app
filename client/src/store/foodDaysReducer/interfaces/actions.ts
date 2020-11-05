import { Ingredient } from "store/ingredientsReducer/interfaces/reducer";
import { ErrorResponseAction } from "store/interfaces";
import * as I from "services/foodDays/interfaces";
import * as actionTypes from "../actionTypes";
import { MealForNewFoodDay } from "./reducer";

// DISPATCHES

export interface FetchUserFoodDaysStart {
  type: typeof actionTypes.FETCH_USER_FOOD_DAYS_START;
}

export interface FetchUserFoodDaysSuccess {
  type: typeof actionTypes.FETCH_USER_FOOD_DAYS_SUCCESS;
  payload: I.FetchALlFoodDaysResponse;
}

export interface FetchUserFoodDaysError extends ErrorResponseAction {
  type: typeof actionTypes.FETCH_USER_FOOD_DAYS_ERROR;
}

export interface CreateUserFoodDaysStart {
  type: typeof actionTypes.CREATE_USER_FOOD_DAYS_START;
}

export interface CreateUserFoodDaysSuccess {
  type: typeof actionTypes.CREATE_USER_FOOD_DAYS_SUCCESS;
  payload: I.CreateFoodDayResponse;
}

export interface CreateUserFoodDaysError extends ErrorResponseAction {
  type: typeof actionTypes.CREATE_USER_FOOD_DAYS_ERROR;
}

// ACTIONS

export interface AddMealToNewFoodDay {
  type: typeof actionTypes.ADD_MEAL_TO_NEW_FOOD_DAY;
}

export interface RemoveMealFromNewFoodDay {
  type: typeof actionTypes.REMOVE_MEAL_FROM_NEW_FOOD_DAY;
  payload: MealForNewFoodDay["id"];
}

export interface AddIngredientToNewFoodDayMeal {
  type: typeof actionTypes.ADD_INGREDIENT_TO_NEW_FOOD_DAY_MEAL;
  payload: {
    mealId: MealForNewFoodDay["id"];
    ingredient: Ingredient;
    multiplier: number;
  };
}

export interface RemoveIngredientToNewFoodDayMeal {
  type: typeof actionTypes.REMOVE_INREDIENT_TO_NEW_FOOD_DAY_MEAL;
  payload: {
    mealId: MealForNewFoodDay["id"];
    ingredientId: Ingredient["id"];
  };
}

export interface HandleIngredientMultiplier {
  type: typeof actionTypes.HANDLE_INGREDIENT_MULTIPLIER;
  payload: {
    mealId: MealForNewFoodDay["id"];
    ingredientId: Ingredient["id"];
    multiplier: number;
  };
}

export interface HandleMealInputsChange {
  type: typeof actionTypes.HANDLE_MEAL_INPUTS_CHANGE;
  payload: {
    mealId: MealForNewFoodDay["id"];
    value: string;
    inputName: "name" | "time";
  };
}

export type ActionTypes =
  | FetchUserFoodDaysSuccess
  | CreateUserFoodDaysSuccess
  | AddMealToNewFoodDay
  | RemoveMealFromNewFoodDay
  | AddIngredientToNewFoodDayMeal
  | RemoveIngredientToNewFoodDayMeal
  | HandleIngredientMultiplier
  | HandleMealInputsChange;

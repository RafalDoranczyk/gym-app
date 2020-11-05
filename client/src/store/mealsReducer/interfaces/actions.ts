import { ErrorResponseAction } from "store/interfaces";
import * as I from "services/meals/interfaces";
import { Ingredient } from "store/ingredientsReducer/interfaces/reducer";
import * as actionTypes from "../actionTypes";

// FETCH TYPES
export interface FetchMealTypesStart {
  type: typeof actionTypes.FETCH_MEAL_TYPES_START;
}

export interface FetchMealTypesSuccess {
  type: typeof actionTypes.FETCH_MEAL_TYPES_SUCCESS;
  payload: I.FetchMealTypesResponse;
}

export interface FetchMealTypesError extends ErrorResponseAction {
  type: typeof actionTypes.FETCH_MEAL_TYPES_ERROR;
}

// FETCH ALL
export interface FetchUserMealsStart {
  type: typeof actionTypes.FETCH_USER_MEALS_START;
}

export interface FetchUserMealsSuccess {
  type: typeof actionTypes.FETCH_USER_MEALS_SUCCESS;
  payload: I.FetchUserMealsResponse;
}

export interface FetchUserMealsError extends ErrorResponseAction {
  type: typeof actionTypes.FETCH_USER_MEALS_ERROR;
}

// CREATE
export interface CreateUserMealStart {
  type: typeof actionTypes.CREATE_USER_MEAL_START;
}

export interface CreateUserMealSuccess {
  type: typeof actionTypes.CREATE_USER_MEAL_SUCCESS;
  payload: I.CreateUserMealResponse;
}

export interface CreateUserMealError extends ErrorResponseAction {
  type: typeof actionTypes.CREATE_USER_MEAL_ERROR;
}

// DELETE
export interface DeleteUserMealStart {
  type: typeof actionTypes.DELETE_USER_MEAL_START;
}

export interface DeleteUserMealSuccess {
  type: typeof actionTypes.DELETE_USER_MEAL_SUCCESS;
  payload: I.DeleteUserMealResponse;
}

export interface DeleteUserMealError extends ErrorResponseAction {
  type: typeof actionTypes.DELETE_USER_MEAL_ERROR;
}

// OTHER
export interface AddIngredientToTable {
  type: typeof actionTypes.ADD_INGREDIENT_TO_TABLE;
  payload: Ingredient;
}

export interface RemoveIngredientFromTable {
  type: typeof actionTypes.REMOVE_INGREDIENT_FROM_TABLE;
  payload: Ingredient["id"][];
}

export interface HandleIngredientInTableMultiplier {
  type: typeof actionTypes.HANDLE_INGREDIENT_IN_TABLE_MULTIPLIER;
  payload: {
    id: Ingredient["id"];
    value: number;
  };
}

export type ActionTypes =
  | FetchMealTypesSuccess
  | FetchUserMealsSuccess
  | CreateUserMealSuccess
  | DeleteUserMealSuccess
  | AddIngredientToTable
  | RemoveIngredientFromTable
  | HandleIngredientInTableMultiplier;

import { ErrorResponseAction } from "store/interfaces";
import * as I from "services/ingredients/interfaces";
import * as actionTypes from "../actionTypes";

// FETCH ALL
export interface FetchUserIngredientsStart {
  type: typeof actionTypes.FETCH_USER_INGREDIENTS_START;
}

export interface FetchUserIngredientsSuccess {
  type: typeof actionTypes.FETCH_USER_INGREDIENTS_SUCCESS;
  payload: I.FetchUserIngredientsResponse;
}

export interface FetchUserIngredientsError extends ErrorResponseAction {
  type: typeof actionTypes.FETCH_USER_INGREDIENTS_ERROR;
}

// FETCH BY NAME
export interface FetchUserIngredientsByNameStart {
  type: typeof actionTypes.FETCH_USER_INGREDIENTS_BY_NAME_START;
}

export interface FetchUserIngredientsByNameSuccess {
  type: typeof actionTypes.FETCH_USER_INGREDIENTS_BY_NAME_SUCCESS;
  payload: I.FetchUserIngredientsByNameResponse;
}

export interface FetchUserIngredientsByNameError extends ErrorResponseAction {
  type: typeof actionTypes.FETCH_USER_INGREDIENTS_BY_NAME_ERROR;
}

// FETCH TYPES
export interface FetchIngredientTypesStart {
  type: typeof actionTypes.FETCH_INGREDIENT_TYPES_START;
}

export interface FetchIngredientTypesSuccess {
  type: typeof actionTypes.FETCH_INGREDIENT_TYPES_SUCCESS;
  payload: I.FetchIngredientTypesResponse;
}

export interface FetchIngredientTypesError extends ErrorResponseAction {
  type: typeof actionTypes.FETCH_INGREDIENT_TYPES_ERROR;
}

// CREATE
export interface CreateUserIngredientStart {
  type: typeof actionTypes.CREATE_USER_INGREDIENT_START;
}

export interface CreateUserIngredientSuccess {
  type: typeof actionTypes.CREATE_USER_INGREDIENT_SUCCESS;
  payload: I.CreateUserIngredientResponse;
}

export interface CreateUserIngredientError extends ErrorResponseAction {
  type: typeof actionTypes.CREATE_USER_INGREDIENT_ERROR;
}

// DELETE
export interface DeleteUserIngredientStart {
  type: typeof actionTypes.DELETE_USER_INGREDIENT_START;
}

export interface DeleteUserIngredientSuccess {
  type: typeof actionTypes.DELETE_USER_INGREDIENT_SUCCESS;
  payload: I.DeleteUserIngredientResponse;
}

export interface DeleteUserIngredientError extends ErrorResponseAction {
  type: typeof actionTypes.DELETE_USER_INGREDIENT_ERROR;
}

// UPDATE
export interface UpdateUserIngredientStart {
  type: typeof actionTypes.UPDATE_USER_INGREDIENT_START;
}

export interface UpdateUserIngredientSuccess {
  type: typeof actionTypes.UPDATE_USER_INGREDIENT_SUCCESS;
  payload: I.UpdateUserIngredientResponse;
}

export interface UpdateUserIngredientError extends ErrorResponseAction {
  type: typeof actionTypes.UPDATE_USER_INGREDIENT_ERROR;
}

export type ActionTypes =
  | FetchUserIngredientsSuccess
  | FetchUserIngredientsByNameSuccess
  | FetchIngredientTypesSuccess
  | CreateUserIngredientSuccess
  | DeleteUserIngredientSuccess
  | UpdateUserIngredientSuccess;

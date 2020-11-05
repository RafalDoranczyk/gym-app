import * as types from "./actionTypes";
import * as I from "./interfaces/actions";

// FETCH ALL
export const fetchUserIngredientsStart = (): I.FetchUserIngredientsStart => ({
  type: types.FETCH_USER_INGREDIENTS_START,
});

export const fetchUserIngredientsSuccess = (
  payload: I.FetchUserIngredientsSuccess["payload"]
): I.FetchUserIngredientsSuccess => ({
  type: types.FETCH_USER_INGREDIENTS_SUCCESS,
  payload,
});

export const fetchUserIngredientsError = (
  payload: I.FetchUserIngredientsError["payload"]
): I.FetchUserIngredientsError => ({
  type: types.FETCH_USER_INGREDIENTS_ERROR,
  payload,
});

// FETCH BY NAME
export const fetchUserIngredientsByNameStart = (): I.FetchUserIngredientsByNameStart => ({
  type: types.FETCH_USER_INGREDIENTS_BY_NAME_START,
});

export const fetchUserIngredientsByNameSuccess = (
  payload: I.FetchUserIngredientsByNameSuccess["payload"]
): I.FetchUserIngredientsByNameSuccess => ({
  type: types.FETCH_USER_INGREDIENTS_BY_NAME_SUCCESS,
  payload,
});

export const fetchUserIngredientsByNameError = (
  payload: I.FetchUserIngredientsByNameError["payload"]
): I.FetchUserIngredientsByNameError => ({
  type: types.FETCH_USER_INGREDIENTS_BY_NAME_ERROR,
  payload,
});

// FETCH TYPES
export const fetchIngredientTypesStart = (): I.FetchIngredientTypesStart => ({
  type: types.FETCH_INGREDIENT_TYPES_START,
});

export const fetchIngredientTypesSuccess = (
  payload: I.FetchIngredientTypesSuccess["payload"]
): I.FetchIngredientTypesSuccess => ({
  type: types.FETCH_INGREDIENT_TYPES_SUCCESS,
  payload,
});

export const fetchIngredientTypesError = (
  payload: I.FetchIngredientTypesError["payload"]
): I.FetchIngredientTypesError => ({
  type: types.FETCH_INGREDIENT_TYPES_ERROR,
  payload,
});

// CREATE
export const createUserIngredientStart = (): I.CreateUserIngredientStart => ({
  type: types.CREATE_USER_INGREDIENT_START,
});

export const createUserIngredientSuccess = (
  payload: I.CreateUserIngredientSuccess["payload"]
): I.CreateUserIngredientSuccess => ({
  type: types.CREATE_USER_INGREDIENT_SUCCESS,
  payload,
});

export const createUserIngredientError = (
  payload: I.CreateUserIngredientError["payload"]
): I.CreateUserIngredientError => ({
  type: types.CREATE_USER_INGREDIENT_ERROR,
  payload,
});

// DELETE
export const deleteUserIngredientStart = (): I.DeleteUserIngredientStart => ({
  type: types.DELETE_USER_INGREDIENT_START,
});

export const deleteUserIngredientSuccess = (
  payload: I.DeleteUserIngredientSuccess["payload"]
): I.DeleteUserIngredientSuccess => ({
  type: types.DELETE_USER_INGREDIENT_SUCCESS,
  payload,
});

export const deleteUserIngredientError = (
  payload: I.DeleteUserIngredientError["payload"]
): I.DeleteUserIngredientError => ({
  type: types.DELETE_USER_INGREDIENT_ERROR,
  payload,
});

// UPDATE
export const updateUserIngredientStart = (): I.UpdateUserIngredientStart => ({
  type: types.UPDATE_USER_INGREDIENT_START,
});

export const updateUserIngredientSuccess = (
  payload: I.UpdateUserIngredientSuccess["payload"]
): I.UpdateUserIngredientSuccess => ({
  type: types.UPDATE_USER_INGREDIENT_SUCCESS,
  payload,
});

export const updateUserIngredientError = (
  payload: I.UpdateUserIngredientError["payload"]
): I.UpdateUserIngredientError => ({
  type: types.UPDATE_USER_INGREDIENT_ERROR,
  payload,
});

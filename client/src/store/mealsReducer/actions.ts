import * as types from "./actionTypes";
import * as I from "./interfaces/actions";

// FETCH TYPES
export const fetchMealTypesStart = (): I.FetchMealTypesStart => ({
  type: types.FETCH_MEAL_TYPES_START,
});

export const fetchMealTypesSuccess = (
  payload: I.FetchMealTypesSuccess["payload"]
): I.FetchMealTypesSuccess => ({
  type: types.FETCH_MEAL_TYPES_SUCCESS,
  payload,
});

export const fetchMealTypesError = (
  payload: I.FetchMealTypesError["payload"]
): I.FetchMealTypesError => ({
  type: types.FETCH_MEAL_TYPES_ERROR,
  payload,
});

// FETCH USER MEALS
export const fetchUserMealsStart = (): I.FetchUserMealsStart => ({
  type: types.FETCH_USER_MEALS_START,
});

export const fetchUserMealsSuccess = (
  payload: I.FetchUserMealsSuccess["payload"]
): I.FetchUserMealsSuccess => ({
  type: types.FETCH_USER_MEALS_SUCCESS,
  payload,
});

export const fetchUserMealsError = (
  payload: I.FetchUserMealsError["payload"]
): I.FetchUserMealsError => ({
  type: types.FETCH_USER_MEALS_ERROR,
  payload,
});

// CREATE
export const createUserMealStart = (): I.CreateUserMealStart => ({
  type: types.CREATE_USER_MEAL_START,
});

export const createUserMealSuccess = (
  payload: I.CreateUserMealSuccess["payload"]
): I.CreateUserMealSuccess => ({
  type: types.CREATE_USER_MEAL_SUCCESS,
  payload,
});

export const createUserMealError = (
  payload: I.CreateUserMealError["payload"]
): I.CreateUserMealError => ({
  type: types.CREATE_USER_MEAL_ERROR,
  payload,
});

// DELETE
export const deleteUserMealStart = (): I.DeleteUserMealStart => ({
  type: types.DELETE_USER_MEAL_START,
});

export const deleteUserMealSuccess = (
  payload: I.DeleteUserMealSuccess["payload"]
): I.DeleteUserMealSuccess => ({
  type: types.DELETE_USER_MEAL_SUCCESS,
  payload,
});

export const deleteUserMealError = (
  payload: I.DeleteUserMealError["payload"]
): I.DeleteUserMealError => ({
  type: types.DELETE_USER_MEAL_ERROR,
  payload,
});

// NOT ASYNC
export const addIngredientToTable = (
  payload: I.AddIngredientToTable["payload"]
): I.AddIngredientToTable => ({
  type: types.ADD_INGREDIENT_TO_TABLE,
  payload,
});

export const removeIngredientFromTable = (
  payload: I.RemoveIngredientFromTable["payload"]
): I.RemoveIngredientFromTable => ({
  type: types.REMOVE_INGREDIENT_FROM_TABLE,
  payload,
});

export const handleIngredientInTableMultiplier = (
  payload: I.HandleIngredientInTableMultiplier["payload"]
): I.HandleIngredientInTableMultiplier => ({
  type: types.HANDLE_INGREDIENT_IN_TABLE_MULTIPLIER,
  payload,
});

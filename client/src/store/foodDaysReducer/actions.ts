import * as I from "./interfaces/actions";
import * as types from "./actionTypes";

// DISPATCHES

export const fetchUserFoodDaysStart = (): I.FetchUserFoodDaysStart => ({
  type: types.FETCH_USER_FOOD_DAYS_START,
});

export const fetchUserFoodDaysSuccess = (
  payload: I.FetchUserFoodDaysSuccess["payload"]
): I.FetchUserFoodDaysSuccess => ({
  type: types.FETCH_USER_FOOD_DAYS_SUCCESS,
  payload,
});

export const fetchUserFoodDaysError = (
  payload: I.FetchUserFoodDaysError["payload"]
): I.FetchUserFoodDaysError => ({
  type: types.FETCH_USER_FOOD_DAYS_ERROR,
  payload,
});

export const createUserFoodDaysStart = (): I.CreateUserFoodDaysStart => ({
  type: types.CREATE_USER_FOOD_DAYS_START,
});

export const createUserFoodDaysSuccess = (
  payload: I.CreateUserFoodDaysSuccess["payload"]
): I.CreateUserFoodDaysSuccess => ({
  type: types.CREATE_USER_FOOD_DAYS_SUCCESS,
  payload,
});

export const createUserFoodDaysError = (
  payload: I.CreateUserFoodDaysError["payload"]
): I.CreateUserFoodDaysError => ({
  type: types.CREATE_USER_FOOD_DAYS_ERROR,
  payload,
});

// ACTIONS

export const addMealToNewFoodDay = (): I.AddMealToNewFoodDay => ({
  type: types.ADD_MEAL_TO_NEW_FOOD_DAY,
});

export const removeMealFromNewFoodDay = (
  payload: I.RemoveMealFromNewFoodDay["payload"]
): I.RemoveMealFromNewFoodDay => ({
  type: types.REMOVE_MEAL_FROM_NEW_FOOD_DAY,
  payload,
});

export const addIngredientToNewFoodDayMeal = (
  payload: I.AddIngredientToNewFoodDayMeal["payload"]
): I.AddIngredientToNewFoodDayMeal => ({
  type: types.ADD_INGREDIENT_TO_NEW_FOOD_DAY_MEAL,
  payload,
});

export const handleIngredientMultiplier = (
  payload: I.HandleIngredientMultiplier["payload"]
): I.HandleIngredientMultiplier => ({
  type: types.HANDLE_INGREDIENT_MULTIPLIER,
  payload,
});

export const removeIngredientToNewFoodDayMeal = (
  payload: I.RemoveIngredientToNewFoodDayMeal["payload"]
): I.RemoveIngredientToNewFoodDayMeal => ({
  type: types.REMOVE_INREDIENT_TO_NEW_FOOD_DAY_MEAL,
  payload,
});

export const handleMealInputsChange = (
  payload: I.HandleMealInputsChange["payload"]
): I.HandleMealInputsChange => ({
  type: types.HANDLE_MEAL_INPUTS_CHANGE,
  payload,
});

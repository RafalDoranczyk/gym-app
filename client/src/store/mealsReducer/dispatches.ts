import { AppThunk } from "store/interfaces";
import MealsService from "services/meals";
import * as I from "services/meals/interfaces";
import * as actions from "./actions";

export const fetchMealTypes = (): AppThunk => async (dispatch) => {
  dispatch(actions.fetchMealTypesStart());
  try {
    const data = await MealsService.fetchMealTypes();
    dispatch(actions.fetchMealTypesSuccess(data));
  } catch (error) {
    dispatch(actions.fetchMealTypesError(error));
  }
};

export const fetchUserMeals = (
  payload: I.FetchUserMealsRequest
): AppThunk => async (dispatch) => {
  dispatch(actions.fetchUserMealsStart());
  try {
    const data = await MealsService.fetchUserMeals(payload);
    dispatch(actions.fetchUserMealsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchUserMealsError(error));
  }
};

export const createUserMeal = (
  payload: Omit<I.CreateUserMealRequest, "ingredientsForNewMeal">
): AppThunk => async (dispatch, getState) => {
  dispatch(actions.createUserMealStart());
  const { meals } = getState();

  const ingredientsForNewMeal = meals.ingredientsForNewMeal.map((i) => ({
    multiplier: i.multiplier,
    id: i.ingredient.id,
  }));

  try {
    const data = await MealsService.createUserMeal({
      ...payload,
      ingredientsForNewMeal,
    });
    dispatch(actions.createUserMealSuccess(data));
  } catch (error) {
    dispatch(actions.createUserMealError(error));
  }
};

export const deleteUserMeal = (
  payload: I.DeleteUserMealRequest
): AppThunk => async (dispatch) => {
  dispatch(actions.deleteUserMealStart());
  try {
    const data = await MealsService.deleteUserMeal(payload);
    dispatch(actions.deleteUserMealSuccess(data));
  } catch (error) {
    dispatch(actions.deleteUserMealError(error));
  }
};

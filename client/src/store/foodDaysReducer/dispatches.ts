import { AppThunk } from "store/interfaces";
import FoodDaysService from "services/foodDays";
import * as I from "services/foodDays/interfaces";
import * as actions from "./actions";

export const fetchUserFoodDays = (
  payload: I.FetchALlFoodDaysRequest
): AppThunk => async (dispatch) => {
  dispatch(actions.fetchUserFoodDaysStart());
  try {
    const data = await FoodDaysService.fetchAll(payload);
    dispatch(actions.fetchUserFoodDaysSuccess(data));
  } catch (error) {
    dispatch(actions.fetchUserFoodDaysError(error));
  }
};

export const createUserFoodDay = (name: string): AppThunk => async (
  dispatch,
  getState
) => {
  dispatch(actions.createUserFoodDaysStart());

  const {
    foodDays: { mealsForNewFoodDay },
  } = getState();

  const payload = {
    name,
    mealsToFoodDay: mealsForNewFoodDay.map(({ name, time, ingredients }) => ({
      name,
      time,
      ingredients: ingredients.map(({ multiplier, ingredient }) => ({
        multiplier,
        id: ingredient.id,
      })),
    })),
  };

  try {
    const data = await FoodDaysService.create(payload);
    dispatch(actions.createUserFoodDaysSuccess(data));
  } catch (error) {
    dispatch(actions.createUserFoodDaysError(error));
  }
};

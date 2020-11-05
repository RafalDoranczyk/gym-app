import { AppThunk } from "store/interfaces";
import IngredientsService from "services/ingredients";
import * as I from "services/ingredients/interfaces";
import * as actions from "./actions";

export const fetchIngredientTypes = (): AppThunk => async (dispatch) => {
  dispatch(actions.fetchIngredientTypesStart());
  try {
    const data = await IngredientsService.fetchIngredientTypes();
    dispatch(actions.fetchIngredientTypesSuccess(data));
  } catch (error) {
    dispatch(actions.fetchIngredientTypesError(error));
  }
};

export const fetchUserIngredients = (
  payload: I.FetchUserIngredientsRequest
): AppThunk => async (dispatch) => {
  dispatch(actions.fetchUserIngredientsStart());
  try {
    const data = await IngredientsService.fetchUserIngredients(payload);
    dispatch(actions.fetchUserIngredientsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchUserIngredientsError(error));
  }
};

export const fetchUserIngredientsByName = (
  payload: I.FetchUserIngredientsByNameRequest
): AppThunk => async (dispatch) => {
  dispatch(actions.fetchUserIngredientsByNameStart());
  try {
    const data = await IngredientsService.fetchuserIngredientsByName(payload);
    dispatch(actions.fetchUserIngredientsByNameSuccess(data));
  } catch (error) {
    dispatch(actions.fetchUserIngredientsByNameError(error));
  }
};

export const createUserIngredient = (
  payload: I.CreateUserIngredientRequest
): AppThunk => async (dispatch) => {
  dispatch(actions.createUserIngredientStart());
  try {
    const data = await IngredientsService.createUserIngredient(payload);
    dispatch(actions.createUserIngredientSuccess(data));
  } catch (error) {
    dispatch(actions.createUserIngredientError(error));
  }
};

export const deleteUserIngredient = (
  payload: I.DeleteUserIngredientRequest
): AppThunk => async (dispatch) => {
  dispatch(actions.deleteUserIngredientStart());
  try {
    const data = await IngredientsService.deleteUserIngredient(payload);
    dispatch(actions.deleteUserIngredientSuccess(data));
  } catch (error) {
    dispatch(actions.deleteUserIngredientError(error));
  }
};

export const updateUserIngredient = (
  payload: I.UpdateUserIngredientRequest
): AppThunk => async (dispatch) => {
  dispatch(actions.updateUserIngredientStart());
  try {
    const data = await IngredientsService.updateUserIngredient(payload);
    dispatch(actions.updateUserIngredientSuccess(data));
  } catch (error) {
    dispatch(actions.updateUserIngredientError(error));
  }
};

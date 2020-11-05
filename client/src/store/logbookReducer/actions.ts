import * as types from "./actionTypes";
import * as I from "./interfaces/actions";

export const handleSelectedDate = (
  payload: I.HandleSelectedDate["payload"]
): I.HandleSelectedDate => ({
  type: types.HANDLE_SELECTED_DATE,
  payload,
});

export const createOrUpdateUserMeasurementsStart = (): I.CreateOrUpdateMeasurementsStart => ({
  type: types.CREATE_OR_UPDATE_USER_MEASUREMENTS_START,
});

export const createOrUpdateUserMeasurementsSuccess = (
  payload: I.CreateOrUpdateMeasurementsSuccess["payload"]
): I.CreateOrUpdateMeasurementsSuccess => ({
  type: types.CREATE_OR_UPDATE_USER_MEASUREMENTS_SUCCESS,
  payload,
});

export const createOrUpdateUserMeasurementsError = (
  payload: I.CreateOrUpdateMeasurementsError["payload"]
): I.CreateOrUpdateMeasurementsError => ({
  type: types.CREATE_OR_UPDATE_USER_MEASUREMENTS_ERROR,
  payload,
});

export const fetchUserMeasurementsStart = (): I.FetchMeasurementsStart => ({
  type: types.FETCH_USER_MEASUREMENTS_START,
});

export const fetchUserMeasurementsSuccess = (
  payload: I.FetchMeasurementsSuccess["payload"]
): I.FetchMeasurementsSuccess => ({
  type: types.FETCH_USER_MEASUREMENTS_SUCCESS,
  payload,
});

export const fetchUserMeasurementsError = (
  payload: I.FetchMeasurementsError["payload"]
): I.FetchMeasurementsError => ({
  type: types.FETCH_USER_MEASUREMENTS_ERROR,
  payload,
});

export const handleDateMatch = (
  payload: I.HandleDateMatch["payload"]
): I.HandleDateMatch => ({
  type: types.HANDLE_DATE_MATCH,
  payload,
});

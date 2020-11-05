import * as I from "services/logbook/interfaces";
import { ErrorResponseAction } from "store/interfaces";
import * as actionTypes from "../actionTypes";

export interface HandleSelectedDate {
  type: typeof actionTypes.HANDLE_SELECTED_DATE;
  payload: Date;
}

export interface FetchMeasurementsStart {
  type: typeof actionTypes.FETCH_USER_MEASUREMENTS_START;
}

export interface FetchMeasurementsSuccess {
  type: typeof actionTypes.FETCH_USER_MEASUREMENTS_SUCCESS;
  payload: I.FetchMeasurementsResponse;
}

export interface FetchMeasurementsError extends ErrorResponseAction {
  type: typeof actionTypes.FETCH_USER_MEASUREMENTS_ERROR;
}

export interface CreateOrUpdateMeasurementsStart {
  type: typeof actionTypes.CREATE_OR_UPDATE_USER_MEASUREMENTS_START;
}

export interface CreateOrUpdateMeasurementsSuccess {
  type: typeof actionTypes.CREATE_OR_UPDATE_USER_MEASUREMENTS_SUCCESS;
  payload: I.CreateOrUpdateMeasurementsResponse;
}

export interface CreateOrUpdateMeasurementsError extends ErrorResponseAction {
  type: typeof actionTypes.CREATE_OR_UPDATE_USER_MEASUREMENTS_ERROR;
}

export interface HandleDateMatch {
  type: typeof actionTypes.HANDLE_DATE_MATCH;
  payload: boolean;
}

export type ActionTypes =
  | FetchMeasurementsSuccess
  | CreateOrUpdateMeasurementsSuccess
  | HandleSelectedDate
  | HandleDateMatch;

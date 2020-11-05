import * as I from "services/auth/interfaces";
import { ErrorResponseAction } from "store/interfaces";
import * as actionTypes from "../actionTypes";

export interface SignupUserStart {
  type: typeof actionTypes.SIGNUP_USER_START;
}

export interface SignupUserSuccess {
  type: typeof actionTypes.SIGNUP_USER_SUCCESS;
  payload: I.SignupResponse;
}

export interface SignupUserError extends ErrorResponseAction {
  type: typeof actionTypes.SIGNUP_USER_ERROR;
}

export interface LoginUserStart {
  type: typeof actionTypes.LOGIN_USER_START;
}

export interface LoginUserSuccess {
  type: typeof actionTypes.LOGIN_USER_SUCCESS;
}

export interface LoginUserError extends ErrorResponseAction {
  type: typeof actionTypes.LOGIN_USER_ERROR;
}

export interface HandleUserLoggedIn {
  type: typeof actionTypes.HANDLE_USER_LOGGED_IN;
  payload: I.DecodedTokenInterface | null;
}

export type ActionTypes =
  | SignupUserSuccess
  | LoginUserSuccess
  | HandleUserLoggedIn;

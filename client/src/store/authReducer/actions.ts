import * as paths from "constants/routesURL";
import history from "helpers/history";
import localStorage from "services/localStorage";
import * as types from "./actionTypes";
import * as I from "./interfaces/actions";

export const signupUserStart = (): I.SignupUserStart => ({
  type: types.SIGNUP_USER_START,
});

export const signupUserSuccess = (
  payload: I.SignupUserSuccess["payload"]
): I.SignupUserSuccess => {
  history.push(paths.DASHBOARD_PAGE_PATH);
  return {
    type: types.SIGNUP_USER_SUCCESS,
    payload,
  };
};

export const signupUserError = (
  payload: I.SignupUserError["payload"]
): I.SignupUserError => ({
  type: types.SIGNUP_USER_ERROR,
  payload,
});

export const loginUserStart = (): I.LoginUserStart => ({
  type: types.LOGIN_USER_START,
});

export const loginUserSuccess = (): I.LoginUserSuccess => {
  history.push(paths.DASHBOARD_PAGE_PATH);
  return {
    type: types.LOGIN_USER_SUCCESS,
  };
};

export const loginUserError = (
  payload: I.LoginUserError["payload"]
): I.LoginUserError => ({
  type: types.LOGIN_USER_ERROR,
  payload,
});

export const handleUserLoggedIn = (
  payload: I.HandleUserLoggedIn["payload"]
): I.HandleUserLoggedIn => {
  if (!payload) {
    localStorage.removeTokens();
    history.push(paths.LOGIN_PAGE_PATH);
  }
  return {
    type: types.HANDLE_USER_LOGGED_IN,
    payload,
  };
};

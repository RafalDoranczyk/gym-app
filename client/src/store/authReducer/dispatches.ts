import AuthService from "services/auth";
import * as I from "services/auth/interfaces";
import * as actions from "./actions";
import { AppThunk } from "../interfaces";

export const signupUser = (payload: I.SignupRequest): AppThunk => async (
  dispatch
) => {
  dispatch(actions.signupUserStart());
  try {
    const data = await AuthService.signup(payload);
    dispatch(actions.signupUserSuccess(data));
  } catch (error) {
    dispatch(actions.signupUserError(error));
  }
};

export const loginUser = (payload: I.LoginRequest): AppThunk => async (
  dispatch
) => {
  dispatch(actions.loginUserStart());
  try {
    await AuthService.login(payload);
    dispatch(actions.loginUserSuccess());
  } catch (error) {
    dispatch(actions.loginUserError(error));
  }
};

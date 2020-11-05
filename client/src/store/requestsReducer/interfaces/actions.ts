import { ErrorResponseAction } from "store/interfaces";
import { Snackbar } from "./reducer";
import * as actionTypes from "../actionTypes";

export interface HandleSnackbar {
  type: typeof actionTypes.HANDLE_SNACKBAR;
  payload: Snackbar;
}

interface ErrorAction extends ErrorResponseAction {
  type: string;
}

interface SuccessAction {
  type: string;
  payload?: {
    message: string;
  };
}

export type ActionTypes = HandleSnackbar | ErrorAction | SuccessAction;

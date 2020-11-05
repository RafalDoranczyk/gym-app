import { AnyAaaaRecord } from "dns";
import * as actionTypes from "../actionTypes";

export interface HandleNavigation {
  type: typeof actionTypes.HANDLE_NAVIGATION;
  payload: boolean;
}

export interface HandleDialog {
  type: typeof actionTypes.HANDLE_DIALOG;
  payload: {
    open: boolean;
    data?: any;
  };
}

export type ActionTypes = HandleNavigation | HandleDialog;

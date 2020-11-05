import * as types from "./actionTypes";
import * as I from "./interfaces/actions";

export const handleNavigation = (
  payload: I.HandleNavigation["payload"]
): I.HandleNavigation => ({
  type: types.HANDLE_NAVIGATION,
  payload,
});

export const handleDialog = (
  payload: I.HandleDialog["payload"]
): I.HandleDialog => ({
  type: types.HANDLE_DIALOG,
  payload,
});

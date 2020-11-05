import * as types from "./actionTypes";
import * as I from "./interfaces/actions";

export const handleSnackbar = (
  payload: I.HandleSnackbar["payload"]
): I.HandleSnackbar => ({
  type: types.HANDLE_SNACKBAR,
  payload,
});

import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import history from "helpers/history";
import { LOGIN_PAGE_PATH } from "constants/routesURL";
import { RequestsReducerState } from "./interfaces/reducer";
import * as types from "./actionTypes";
import { ActionTypes } from "./interfaces/actions";

export const initialState: RequestsReducerState = {
  snackbar: {
    message: "",
    messageSeverity: undefined,
    open: false,
  },
  error: false,
  success: false,
};

const requestsReducer = produce(
  (draft: WritableDraft<RequestsReducerState>, action: ActionTypes) => {
    const { type } = action;
    const isErrorAction = type.includes("ERROR");
    const isSuccessAction = type.includes("SUCCESS");
    draft.success = false;
    if (type === types.HANDLE_SNACKBAR) {
      draft.snackbar.open = false;
    } else if (isErrorAction) {
      draft.error = true;
      draft.snackbar.open = true;
      draft.snackbar.messageSeverity = "error";

      const isResponseError = action.payload && action.payload.response;
      const isRequestError = action.payload.request;

      if (isResponseError) {
        const { response } = action.payload;

        switch (response.status) {
          case 401:
            draft.snackbar.message = "Not authorized. Please log in";
            history.push(LOGIN_PAGE_PATH);
            break;
          case 500:
            draft.snackbar.message = "500 mess";
            break;
          default:
            draft.snackbar.message =
              response.data.message || "Something is wrong";
        }
      } else if (isRequestError) {
        draft.snackbar.message = "Something wrong with the server";
      }
    } else if (isSuccessAction) {
      const isMessageWithPayload = action.payload && action.payload.message;

      if (isMessageWithPayload) {
        draft.snackbar = {
          message: action.payload.message,
          open: true,
          messageSeverity: "success",
        };
        draft.success = true;
      }
    }
  },
  initialState
);

export default requestsReducer;

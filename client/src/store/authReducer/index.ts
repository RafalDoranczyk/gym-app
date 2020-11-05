import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { ActionTypes } from "./interfaces/actions";
import { AuthReducerState } from "./interfaces/reducer";
import * as types from "./actionTypes";

export const initialState: AuthReducerState = {
  isLoggedIn: false,
  username: undefined,
};

const authReducer = produce(
  (draft: WritableDraft<AuthReducerState>, action: ActionTypes) => {
    switch (action.type) {
      case types.LOGIN_USER_SUCCESS:
        draft.isLoggedIn = true;
        break;
      case types.SIGNUP_USER_SUCCESS:
        draft.isLoggedIn = true;
        break;
      case types.HANDLE_USER_LOGGED_IN:
        if (action.payload) {
          const { username } = action.payload;
          draft.username = username;
          draft.isLoggedIn = true;
        } else {
          draft.isLoggedIn = false;
        }
        break;
    }
  },
  initialState
);

export default authReducer;

import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { ActionTypes } from "./interfaces/actions";
import { RootReducerState } from "./interfaces/reducer";
import * as types from "./actionTypes";

export const initialState: RootReducerState = {
  dialog: {
    open: false,
    data: null,
  },
  isNavigationOpen: false,
};

const rootReducer = produce(
  (draft: WritableDraft<RootReducerState>, action: ActionTypes) => {
    switch (action.type) {
      case types.HANDLE_NAVIGATION:
        draft.isNavigationOpen = action.payload;
        break;
      case types.HANDLE_DIALOG:
        draft.dialog = {
          open: action.payload.open,
          data: action.payload.data,
        };
    }
  },
  initialState
);

export default rootReducer;

import produce from "immer";
import { WritableDraft } from "immer/dist/internal";

export interface LoadingReducerState {
  readonly isLoading: boolean;
}

export const initialState: LoadingReducerState = {
  isLoading: false,
};

const loadingReducer = produce(
  (draft: WritableDraft<LoadingReducerState>, action: any) => {
    const matches = /(.*)_(START|SUCCESS|ERROR)/.exec(action.type);

    if (matches) {
      const [, , requestState]: string[] = matches;
      draft.isLoading = requestState === "START";
    }
  },
  initialState
);

export default loadingReducer;

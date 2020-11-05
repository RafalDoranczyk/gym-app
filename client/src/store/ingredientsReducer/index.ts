import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { ActionTypes } from "./interfaces/actions";
import { IngredientsReducerState } from "./interfaces/reducer";
import * as types from "./actionTypes";

export const initialState: IngredientsReducerState = {
  ingredientSourceTypes: [],
  ingredientCountTypes: [],
  userIngredients: {
    data: [],
    count: 0,
  },
};

const ingredientsReducer = produce(
  (draft: WritableDraft<IngredientsReducerState>, action: ActionTypes) => {
    switch (action.type) {
      case types.FETCH_INGREDIENT_TYPES_SUCCESS:
        draft.ingredientCountTypes = action.payload.data.countTypes;
        draft.ingredientSourceTypes = action.payload.data.sourceTypes;
        break;
      case types.FETCH_USER_INGREDIENTS_SUCCESS:
        {
          const { data, count } = action.payload;

          draft.userIngredients = {
            data,
            count,
          };
        }
        break;
      case types.FETCH_USER_INGREDIENTS_BY_NAME_SUCCESS:
        draft.userIngredients.data = action.payload.data;
        break;
      case types.CREATE_USER_INGREDIENT_SUCCESS:
        draft.userIngredients.data.push(action.payload.data);
        break;
      case types.UPDATE_USER_INGREDIENT_SUCCESS:
        {
          const { data } = action.payload;
          const oldData = draft.userIngredients.data;

          const index = oldData.findIndex((ing) => ing.id === data.id);

          oldData[index] = {
            ...oldData[index],
            ...data,
          };
        }
        break;
      case types.DELETE_USER_INGREDIENT_SUCCESS:
        {
          const { data, count } = draft.userIngredients;
          const index = data.findIndex((ing) => ing.id === action.payload.id);
          if (index !== -1) {
            draft.userIngredients.data.splice(index, 1);
            draft.userIngredients.count = data.length === 0 ? 0 : count;
          }
        }
        break;
    }
  },
  initialState
);

export default ingredientsReducer;

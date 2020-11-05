import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { ActionTypes } from "./interfaces/actions";
import { MealsReducerState } from "./interfaces/reducer";
import * as types from "./actionTypes";

export const initialState: MealsReducerState = {
  mealTypes: [],
  userMeals: {
    data: [],
    count: 0,
  },
  ingredientsForNewMeal: [],
};

const mealsReducer = produce(
  (draft: WritableDraft<MealsReducerState>, action: ActionTypes) => {
    switch (action.type) {
      case types.FETCH_MEAL_TYPES_SUCCESS:
        draft.mealTypes = action.payload.data;
        break;
      case types.FETCH_USER_MEALS_SUCCESS:
        draft.userMeals = {
          data: action.payload.data,
          count: action.payload.count,
        };
        break;
      case types.CREATE_USER_MEAL_SUCCESS:
        draft.userMeals.data.push(action.payload.data);
        draft.ingredientsForNewMeal = [];
        break;
      case types.DELETE_USER_MEAL_SUCCESS:
        {
          const { data, count } = draft.userMeals;
          const index = data.findIndex(({ id }) => id === action.payload.id);
          if (index !== -1) {
            draft.userMeals.data.splice(index, 1);
            draft.userMeals.count = data.length === 0 ? 0 : count;
          }
        }
        break;
      case types.ADD_INGREDIENT_TO_TABLE:
        draft.ingredientsForNewMeal.push({
          ingredient: action.payload,
          multiplier: 1,
        });
        break;
      case types.REMOVE_INGREDIENT_FROM_TABLE:
        action.payload.forEach((id) => {
          const index = draft.ingredientsForNewMeal.findIndex(
            (ing) => ing.ingredient.id === id
          );
          if (index !== -1) draft.ingredientsForNewMeal.splice(index, 1);
        });
        break;
      case types.HANDLE_INGREDIENT_IN_TABLE_MULTIPLIER:
        {
          const { id, value } = action.payload;
          const index = draft.ingredientsForNewMeal.findIndex(
            ({ ingredient }) => ingredient.id === id
          );

          if (index !== -1) {
            const { countType } = draft.ingredientsForNewMeal[index].ingredient;
            let mult = 1;

            if (countType === "100g") {
              mult = 100;
            } else if (countType === "1kg") {
              mult = 1000;
            }

            draft.ingredientsForNewMeal[index].multiplier = value / mult;
          }
        }
        break;
    }
  },
  initialState
);

export default mealsReducer;

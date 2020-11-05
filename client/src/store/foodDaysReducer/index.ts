import produce from "immer";
import { WritableDraft } from "immer/dist/internal";
import { FoodDaysReducerState } from "./interfaces/reducer";
import * as types from "./actionTypes";
import { ActionTypes } from "./interfaces/actions";

export const initialState: FoodDaysReducerState = {
  userFoodDays: {
    data: [],
    count: 0,
  },
  mealsForNewFoodDay: [
    { id: 0, name: "Meal nr 1", time: "12:00", ingredients: [] },
  ],
};

const mealsReducer = produce(
  (draft: WritableDraft<FoodDaysReducerState>, action: ActionTypes) => {
    switch (action.type) {
      case types.FETCH_USER_FOOD_DAYS_SUCCESS:
        draft.userFoodDays.data = action.payload.data;
        draft.userFoodDays.count = action.payload.count;
        break;
      case types.CREATE_USER_FOOD_DAYS_SUCCESS:
        console.log(action.payload);
        break;
      case types.ADD_MEAL_TO_NEW_FOOD_DAY:
        draft.mealsForNewFoodDay.forEach((f, index) => {
          f.id = index;
        });
        draft.mealsForNewFoodDay.push({
          id: draft.mealsForNewFoodDay.length,
          time: "12:00",
          name: `Meal nr ${draft.mealsForNewFoodDay.length + 1}`,
          ingredients: [],
        });
        break;
      case types.REMOVE_MEAL_FROM_NEW_FOOD_DAY:
        {
          const index = draft.mealsForNewFoodDay.findIndex(
            (i) => i.id === action.payload
          );
          draft.mealsForNewFoodDay.splice(index, 1);
          draft.mealsForNewFoodDay.forEach((meal, index) => {
            meal.id = index;
          });
        }
        break;
      case types.ADD_INGREDIENT_TO_NEW_FOOD_DAY_MEAL:
        {
          const { mealId, ingredient, multiplier } = action.payload;
          const index = draft.mealsForNewFoodDay.findIndex(
            (i) => i.id === mealId
          );

          draft.mealsForNewFoodDay[index].ingredients.push({
            ingredient,
            multiplier,
          });
        }
        break;
      case types.REMOVE_INREDIENT_TO_NEW_FOOD_DAY_MEAL:
        {
          const { mealId, ingredientId } = action.payload;
          const mealIndex = draft.mealsForNewFoodDay.findIndex(
            (i) => i.id === mealId
          );
          if (mealIndex !== -1) {
            const ingredientIndex = draft.mealsForNewFoodDay[
              mealIndex
            ].ingredients.findIndex((i) => i.ingredient.id === ingredientId);
            if (ingredientIndex !== -1) {
              draft.mealsForNewFoodDay[mealIndex].ingredients.splice(
                ingredientIndex,
                1
              );
            }
          }
        }
        break;
      case types.HANDLE_INGREDIENT_MULTIPLIER:
        {
          const { mealId, ingredientId, multiplier } = action.payload;
          const mealIndex = draft.mealsForNewFoodDay.findIndex(
            (i) => i.id === mealId
          );
          if (mealIndex !== -1) {
            const ingredientIndex = draft.mealsForNewFoodDay[
              mealIndex
            ].ingredients.findIndex((i) => i.ingredient.id === ingredientId);
            if (ingredientIndex !== -1) {
              draft.mealsForNewFoodDay[mealIndex].ingredients[
                ingredientIndex
              ].multiplier = multiplier;
            }
          }
        }
        break;
      case types.HANDLE_MEAL_INPUTS_CHANGE:
        {
          const { mealId, inputName, value } = action.payload;
          const index = draft.mealsForNewFoodDay.findIndex(
            (meal) => meal.id === mealId
          );
          draft.mealsForNewFoodDay[index][inputName] = value;
        }
        break;
    }
  },
  initialState
);

export default mealsReducer;

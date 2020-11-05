import * as authDispatches from "./authReducer/dispatches";
import * as ingredientDispatches from "./ingredientsReducer/dispatches";
import * as mealDispatches from "./mealsReducer/dispatches";
import * as logbookDispatches from "./logbookReducer/dispatches";
import * as foodDaysDispatches from "./foodDaysReducer/dispatches";

export const dispatches = {
  ...authDispatches,
  ...ingredientDispatches,
  ...mealDispatches,
  ...logbookDispatches,
  ...foodDaysDispatches,
};

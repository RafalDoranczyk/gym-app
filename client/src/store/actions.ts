import * as authActions from "./authReducer/actions";
import * as errorActions from "./requestsReducer/actions";
import * as ingredientsActions from "./ingredientsReducer/actions";
import * as mealsActions from "./mealsReducer/actions";
import * as rootActions from "./rootReducer/actions";
import * as logbookActions from "./logbookReducer/actions";
import * as foodDaysActions from "./foodDaysReducer/actions";

export const actions = {
  ...authActions,
  ...errorActions,
  ...ingredientsActions,
  ...mealsActions,
  ...rootActions,
  ...logbookActions,
  ...foodDaysActions,
};

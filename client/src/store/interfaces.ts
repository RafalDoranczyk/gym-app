import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootReducerState } from "./rootReducer/interfaces/reducer";
import { IngredientsReducerState } from "./ingredientsReducer/interfaces/reducer";
import { AuthReducerState } from "./authReducer/interfaces/reducer";
import { LoadingReducerState } from "./loadingReducer";
import { RequestsReducerState } from "./requestsReducer/interfaces/reducer";
import { MealsReducerState } from "./mealsReducer/interfaces/reducer";
import { LogbookReducerState } from "./logbookReducer/interfaces/reducer";
import { FoodDaysReducerState } from "./foodDaysReducer/interfaces/reducer";

export interface Reducers {
  auth: AuthReducerState;
  loading: LoadingReducerState;
  request: RequestsReducerState;
  root: RootReducerState;
  ingredients: IngredientsReducerState;
  meals: MealsReducerState;
  foodDays: FoodDaysReducerState;
  logbook: LogbookReducerState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  Reducers,
  unknown,
  Action<string>
>;

export interface ErrorResponseAction {
  payload: { response: { data: { message: string } } } | any;
}

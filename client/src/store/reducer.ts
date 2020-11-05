import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import ingredientsReducer from "./ingredientsReducer";
import rootReducer from "./rootReducer";
import loadingReducer from "./loadingReducer";
import authReducer from "./authReducer";
import requestsReducer from "./requestsReducer";
import mealsReducer from "./mealsReducer";
import logbookReducer from "./logbookReducer";
import { Reducers } from "./interfaces";
import foodDaysReducer from "./foodDaysReducer";

const reducer = combineReducers<Reducers>({
  auth: authReducer,
  loading: loadingReducer,
  request: requestsReducer,
  root: rootReducer,
  ingredients: ingredientsReducer,
  meals: mealsReducer,
  foodDays: foodDaysReducer,
  logbook: logbookReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

const useSelector: TypedUseSelectorHook<Reducers> = useReduxSelector;

export { store, reducer, useSelector };

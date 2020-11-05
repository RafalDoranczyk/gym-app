import React from "react";
import { FoodDayMeal } from "store/foodDaysReducer/interfaces/reducer";
import SingleMeal from "./SingleMeal";

export interface SingleMealHookProps {
  meal: FoodDayMeal;
}

const SingleMealHook: React.FunctionComponent<SingleMealHookProps> = ({
  meal,
}) => {
  return <SingleMeal meal={meal} />;
};

export default SingleMealHook;

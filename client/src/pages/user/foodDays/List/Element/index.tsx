import React from "react";
import { FoodDay } from "store/foodDaysReducer/interfaces/reducer";
import FoodDayCard from "./Element";

export interface FoodDayCardHookProps {
  foodDay: FoodDay;
}

const FoodDayCardHook: React.FunctionComponent<FoodDayCardHookProps> = ({
  foodDay,
}) => {
  const onEditClick = () => {};
  const onDeleteClick = () => {};

  return (
    <FoodDayCard
      foodDay={foodDay}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    />
  );
};

export default FoodDayCardHook;

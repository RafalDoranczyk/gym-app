import React from "react";
import { Paper } from "@material-ui/core";
import { MealToFoodDay } from "store/logbookReducer/interfaces/reducer";

export interface LogbookMealElementProps {
  meal: MealToFoodDay;
}

const LogbookMealElement: React.FunctionComponent<LogbookMealElementProps> = () => {
  return (
    <Paper elevation={1}>
      <h2>fsfs</h2>
    </Paper>
  );
};

export default LogbookMealElement;

/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from "@material-ui/core";
import React from "react";
import { FoodDayMeal } from "store/foodDaysReducer/interfaces/reducer";
import { useStyles } from "./styles";

export interface SingleMealProps {
  meal: FoodDayMeal;
}

const SingleMeal: React.FunctionComponent<SingleMealProps> = ({ meal }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <TextField disabled />
    </div>
  );
};

export default SingleMeal;

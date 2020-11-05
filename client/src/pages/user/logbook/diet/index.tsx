import React from "react";
import { Button, Paper } from "@material-ui/core";
import { useSelector } from "store";
import LogbookMealElement from "./Element/Element";
import { useStyles } from "./styles";

const LogbookDietPage: React.FunctionComponent = () => {
  const { mealsToFoodDay } = useSelector((state) => state.logbook);

  const classes = useStyles();

  return (
    <div>
      {mealsToFoodDay.map((meal) => (
        <LogbookMealElement meal={meal} />
      ))}
      <Paper elevation={0} className={classes.addNew}>
        <Button color="primary" variant="contained" size="small">
          Create new meal
        </Button>
        <Button color="secondary" variant="contained" size="small">
          Use meal from my meals
        </Button>
      </Paper>
    </div>
  );
};

export default LogbookDietPage;

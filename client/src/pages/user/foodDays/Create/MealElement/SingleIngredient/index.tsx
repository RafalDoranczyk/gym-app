import React from "react";
import {
  Container,
  Grow,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { AttachMoney, Delete } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { actions } from "store";
import { IngredientForNewMeal } from "store/mealsReducer/interfaces/reducer";
import { calcValuesForInredient } from "./utils";
import { useStyles } from "./styles";

export interface SingleIngredientForNewMealProps {
  ingredientToMeal: IngredientForNewMeal;
  mealId: number;
  setIdsToOmit: React.Dispatch<React.SetStateAction<number[]>>;
  ingredientNr: number;
}

const SingleIngredientForNewMeal: React.FunctionComponent<SingleIngredientForNewMealProps> = ({
  ingredientToMeal,
  mealId,
  setIdsToOmit,
  ingredientNr,
}) => {
  const dispatch = useDispatch();

  const { id, countType, name } = ingredientToMeal.ingredient;

  const removeIngredientFromMeal = (ingredientId: number) => {
    setIdsToOmit((prevState) => prevState.filter((id) => id !== ingredientId));

    dispatch(
      actions.removeIngredientToNewFoodDayMeal({
        mealId,
        ingredientId,
      })
    );
  };

  const handleIngredientMultiplier = (value: number, defaultValue: number) => {
    dispatch(
      actions.handleIngredientMultiplier({
        multiplier: value / defaultValue,
        ingredientId: id,
        mealId,
      })
    );
  };

  let defaultValue = 1;

  if (countType === "100g") {
    defaultValue = 100;
  } else if (countType === "1kg") {
    defaultValue = 1000;
  }

  const calculatedValues = calcValuesForInredient(ingredientToMeal);

  const classes = useStyles();

  const { kcal, carbs, protein, fat, price } = calculatedValues;

  return (
    <Grow in>
      <Container disableGutters className={classes.container}>
        <div className={classes.number}>{ingredientNr}</div>
        <TextField
          className={classes.input}
          defaultValue={defaultValue}
          type="number"
          onChange={(e) =>
            handleIngredientMultiplier(+e.target.value, defaultValue)
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {countType === "1 piece" ? "piece" : "g"}
              </InputAdornment>
            ),
          }}
        />
        <Typography className={classes.name}>{name}</Typography>
        <IconButton
          onClick={() => removeIngredientFromMeal(id)}
          aria-label="delete"
          className={classes.deleteButton}
        >
          <Delete color="secondary" fontSize="small" />
        </IconButton>
        <div className={classes.kcal}>kcal</div>
        <div className={classes.carbs}>carbs</div>
        <div className={classes.protein}>protein</div>
        <div className={classes.fat}>fats</div>
        <div className={classes.price}>
          <AttachMoney />
        </div>

        <div className={classes.kcalNumber}>{kcal}</div>
        <div className={classes.carbsNumber}>{carbs}</div>
        <div className={classes.proteinNumber}>{protein}</div>
        <div className={classes.fatNumber}>{fat}</div>
        <div className={classes.priceNumber}>{price}</div>
      </Container>
    </Grow>
  );
};

export default SingleIngredientForNewMeal;

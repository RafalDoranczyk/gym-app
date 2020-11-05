import React, { useState } from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Container,
  Divider,
  Grow,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { DeleteForever, ExpandMore } from "@material-ui/icons";
import { MealForNewFoodDay } from "store/foodDaysReducer/interfaces/reducer";
import { OnAsyncWriteInput } from "components";
import { useDispatch } from "react-redux";
import { actions, dispatches, useSelector } from "store";
import { useStyles } from "./styles";
import SingleIngredientForNewMeal from "./SingleIngredient";
import { getSummedMealValues } from "./utils";

export interface MealElementForFoodDayProps {
  meal: MealForNewFoodDay;
  removeMealFromFoodDay: (id: number) => void;
  expanded: number | false;
  handlePanelExpand: (
    panel: number
  ) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
}

const MealElementForFoodDay: React.FunctionComponent<MealElementForFoodDayProps> = ({
  meal,
  removeMealFromFoodDay,
  expanded,
  handlePanelExpand,
}) => {
  const { userIngredients } = useSelector((state) => state.ingredients);

  const dispatch = useDispatch();

  const [idsToOmit, setIdsToOmit] = useState<number[]>([]);

  const isExpanded = expanded === meal.id;
  const classes = useStyles({ expanded: isExpanded });

  const addIngredientToMeal = (name: string) => {
    const ingredient = userIngredients.data.find((i) => i.name === name);

    if (ingredient) {
      setIdsToOmit([...idsToOmit, ingredient.id]);
      dispatch(
        actions.addIngredientToNewFoodDayMeal({
          mealId: meal.id,
          ingredient,
          multiplier: 1,
        })
      );
    }
  };

  const onInputWrite = (name: string) => {
    dispatch(dispatches.fetchUserIngredientsByName({ name, idsToOmit }));
  };

  const changeMealInput = (inputName: "name" | "time", value: string) => {
    dispatch(
      actions.handleMealInputsChange({ mealId: meal.id, inputName, value })
    );
  };

  const { ingredients } = meal;
  const { kcal, carbs, protein, fat, price } = getSummedMealValues(ingredients);

  return (
    <Grow in>
      <Container disableGutters>
        <Accordion expanded={isExpanded} onChange={handlePanelExpand(meal.id)}>
          <AccordionSummary
            aria-controls="meals-panel"
            id="meals-panel"
            expandIcon={<ExpandMore />}
          >
            <Avatar sizes="small" className={classes.avatar}>
              {meal.id + 1}
            </Avatar>

            <TextField
              onClick={(e) => isExpanded && e.stopPropagation()}
              value={meal.name}
              onChange={(e) => changeMealInput("name", e.target.value)}
              className={classes.nameInput}
              id={meal.id.toString()}
              label="Meal name"
              variant="outlined"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              onClick={(e) => isExpanded && e.stopPropagation()}
              value={meal.time}
              onChange={(e) => changeMealInput("time", e.target.value)}
              className={classes.timeInput}
              variant="outlined"
              label="Time"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </AccordionSummary>

          <Divider variant="middle" />

          <AccordionDetails className={classes.accordionDetails}>
            {ingredients.map((ingredientToMeal, index) => (
              <SingleIngredientForNewMeal
                key={ingredientToMeal.ingredient.id}
                setIdsToOmit={setIdsToOmit}
                ingredientToMeal={ingredientToMeal}
                mealId={meal.id}
                ingredientNr={index + 1}
              />
            ))}
          </AccordionDetails>

          <AccordionActions>
            <div className={classes.searchInput}>
              <OnAsyncWriteInput
                onAsyncInputWrite={onInputWrite}
                onAsyncInputClick={addIngredientToMeal}
                itemsArray={userIngredients.data}
                label="Add ingredient"
                isError={false}
              />
            </div>
            <IconButton
              onClick={() => removeMealFromFoodDay(meal.id)}
              aria-label="delete meal"
            >
              <DeleteForever color="secondary" />
            </IconButton>
          </AccordionActions>
        </Accordion>
        <div className={classes.mealSummary}>
          <Typography className={classes.summaryTypo}>
            K: {kcal.toFixed()}
          </Typography>
          <Typography className={classes.summaryTypo}>
            C: {carbs.toFixed()}
          </Typography>
          <Typography className={classes.summaryTypo}>
            P: {protein.toFixed()}
          </Typography>
          <Typography className={classes.summaryTypo}>
            F: {fat.toFixed()}
          </Typography>
          <Typography className={classes.summaryTypo}>
            $: {price.toFixed(2)}
          </Typography>
        </div>
      </Container>
    </Grow>
  );
};

export default MealElementForFoodDay;

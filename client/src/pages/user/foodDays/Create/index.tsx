import { Button, Container, Grid, Typography } from "@material-ui/core";
import { CreatePageHeader, HookFormInput, SubmitFormButton } from "components";
import { AddCircle } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions, dispatches, useSelector } from "store";
import MealElement from "./MealElement";
import { useStyles } from "./styles";
import { foodDayNameInput, UseFoodDayInputs } from "./hookInputs";
import { getSummedFoodDaysValues } from "./utils";

const CreateFoodDayPage: React.FunctionComponent = () => {
  const { mealsForNewFoodDay } = useSelector((state) => state.foodDays);

  const dispatch = useDispatch();

  const { register, errors, handleSubmit, getValues } = useForm<
    UseFoodDayInputs
  >({
    mode: "onChange",
  });

  const [expanded, setExpanded] = useState<number | false>(false);

  const handlePanelExpand = (panel: number) => (
    e: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  const addMealToFoodDay = () => {
    const mealsWithoutAddedIngredients = mealsForNewFoodDay.filter(
      ({ ingredients }) => ingredients.length === 0
    );
    if (mealsWithoutAddedIngredients.length > 0) {
      return setExpanded(mealsWithoutAddedIngredients[0].id);
    }
    dispatch(actions.addMealToNewFoodDay());
  };

  const removeMealFromFoodDay = (id: number) => {
    dispatch(actions.removeMealFromNewFoodDay(id));
  };

  const onSubmit = () => {
    const mealsWithoutAddedIngredients = mealsForNewFoodDay.filter(
      ({ ingredients }) => ingredients.length === 0
    );

    if (mealsWithoutAddedIngredients.length > 0) {
      return setExpanded(mealsWithoutAddedIngredients[0].id);
    }

    const { name } = getValues();
    dispatch(dispatches.createUserFoodDay(name));
  };

  const classes = useStyles();

  const total = getSummedFoodDaysValues(mealsForNewFoodDay);

  return (
    <Container
      onSubmit={handleSubmit(onSubmit)}
      maxWidth="sm"
      component="form"
      className={classes.container}
    >
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <CreatePageHeader>Create new food day schema</CreatePageHeader>
        </Grid>

        <Grid item>
          <HookFormInput
            register={register}
            errors={errors}
            schema={foodDayNameInput}
          />
        </Grid>

        {mealsForNewFoodDay.map((meal) => (
          <Grid key={meal.id} item>
            <MealElement
              expanded={expanded}
              handlePanelExpand={handlePanelExpand}
              removeMealFromFoodDay={removeMealFromFoodDay}
              meal={meal}
            />
          </Grid>
        ))}

        <Grid item>
          <div className={classes.foodDaySummary}>
            {Object.entries(total).map(([key, value]) => (
              <div
                className={[classes.foodDaySummaryItem, classes[key]].join(" ")}
                key={key}
              >
                <Typography className={classes.foodDaySummaryValue}>
                  {key === "price" ? value.toFixed(2) : value.toFixed(0)}
                </Typography>
                <Typography className={classes.foodDaySummaryKey}>
                  {key}
                </Typography>
              </div>
            ))}
          </div>
        </Grid>

        <Grid item>
          <div className={classes.buttonsWraper}>
            <Button
              size="large"
              onClick={addMealToFoodDay}
              color="primary"
              variant="contained"
              startIcon={<AddCircle />}
            >
              Add new meal
            </Button>

            <SubmitFormButton>Save</SubmitFormButton>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateFoodDayPage;

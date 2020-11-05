import React from "react";
import { CreateNewItemButton, Paginator, TabBar } from "components";
import * as paths from "constants/routesURL";
import { Container, Grid, Typography, Zoom } from "@material-ui/core";
import UseFetchWithTabBar from "hooks/useFetchWithTabBar";
import { actions, dispatches, useSelector } from "store";
import { useDispatch } from "react-redux";
import { Meal } from "store/mealsReducer/interfaces/reducer";
import UseDeleteOnExit from "hooks/useDeleteOnExit";
import MealElement from "./Element";
import { useStyles } from "./styles";
import UpdateMealDialog from "./Dialog";

const MealListPage: React.FunctionComponent = () => {
  const {
    meals: { userMeals, mealTypes },
    root: { dialog },
    loading: { isLoading },
  } = useSelector((state) => state);

  const { deletedItem, onDeleteClick } = UseDeleteOnExit();

  const dispatch = useDispatch();

  const { tabBarValue, onTabClick } = UseFetchWithTabBar({
    tabBarValues: mealTypes,
    dispatchForTabBarValues: dispatches.fetchMealTypes,
    fetchItemsFunction: dispatches.fetchUserMeals,
  });

  const handleDelete = (id: number) => {
    dispatch(dispatches.deleteUserMeal({ id }));
  };

  const onEditClick = (data: Meal) => {
    console.log(data);
    dispatch(actions.handleDialog({ open: true, data }));
  };

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <TabBar
        tabs={mealTypes}
        onTabClick={onTabClick}
        tabBarValue={tabBarValue}
      />

      {userMeals.data.length === 0 && !isLoading ? (
        <div className={classes.noMealsWrapper}>
          <Typography variant="h6">You have no meals</Typography>
        </div>
      ) : (
        <Grid className={classes.root} container spacing={2}>
          {userMeals.data.map((meal, index) => (
            <Zoom
              key={meal.id}
              onExited={() => handleDelete(meal.id)}
              in={deletedItem !== meal.id}
              timeout={(index + 1) * 150}
            >
              <Grid item md={4} lg={3} xs={12} sm={6}>
                <MealElement
                  onEditClick={() => onEditClick(meal)}
                  onDeleteClick={() => onDeleteClick(meal.id)}
                  meal={meal}
                />
              </Grid>
            </Zoom>
          ))}
        </Grid>
      )}

      {dialog.open && <UpdateMealDialog data={dialog.data} />}
      <Paginator count={userMeals.count} />
      <CreateNewItemButton to={paths.CREATE_MEAL_PATH} />
    </Container>
  );
};

export default MealListPage;

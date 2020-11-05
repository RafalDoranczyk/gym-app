import React from "react";
import { CreateNewItemButton, Paginator } from "components";
import { CREATE_FOOD_DAY_PATH } from "constants/routesURL";
import { Container, Typography, Grid, Grow } from "@material-ui/core";
import { UserFoodDays } from "store/foodDaysReducer/interfaces/reducer";
import FoodDayCard from "./Element";
import { useStyles } from "./styles";

export interface FoodDayListPageProps {
  userFoodDays: UserFoodDays;
  isLoading: boolean;
}

const FoodDayListPage: React.FunctionComponent<FoodDayListPageProps> = ({
  userFoodDays,
  isLoading,
}) => {
  const { data, count } = userFoodDays;
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      {data.length === 0 && !isLoading && (
        <div className={classes.noFoodDaysWrapper}>
          <Typography variant="h6">You have no day diet schemas</Typography>
        </div>
      )}
      <Grid className={classes.foodDaysWrapper} container spacing={2}>
        {data.map((foodDay, index) => (
          <Grow in timeout={140 * (index + 1)} key={foodDay.id}>
            <Grid item md={6} lg={4} xs={12} sm={8}>
              <FoodDayCard foodDay={foodDay} />
            </Grid>
          </Grow>
        ))}
      </Grid>
      <CreateNewItemButton to={CREATE_FOOD_DAY_PATH} />
      <Paginator count={count} />
    </Container>
  );
};

export default FoodDayListPage;

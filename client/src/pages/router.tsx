import React from "react";
import { Switch, Route } from "react-router-dom";
import * as paths from "constants/routesURL";
import { Container } from "@material-ui/core";
import { useStyles } from "../styles";
import { protectedRoute } from "../helpers/protectedRoute";
import { HomePage, NotAllowedPage, NotFoundPage } from "./other";
import { LoginPage, SignupPage } from "./auth";
import LogbookHeader from "./user/logbook/Header";
import LogbookNavigation from "./user/logbook/Navigation";
import {
  DashboardPage,
  IngredientListPage,
  CreateIngredientPage,
  CreateMealPage,
  MealListPage,
  LogbookSummaryPage,
  LogbookDietPage,
  LogbookWorkoutPage,
  LogbookMeasurementsPage,
  FoodDayListPage,
  CreateFoodDayPage,
} from "./user";

const AppRouter: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Switch>
      <Route exact path={paths.HOME_PAGE_PATH} component={HomePage} />
      <Route exact path={paths.LOGIN_PAGE_PATH} component={LoginPage} />
      <Route exact path={paths.SIGNUP_PAGE_PATH} component={SignupPage} />
      <Route
        exact
        path={paths.DASHBOARD_PAGE_PATH}
        render={(props) => protectedRoute(DashboardPage, props)}
      />

      {/* LOGBOOK */}
      <Route
        path={paths.LOGBOOK_PAGE_PATH}
        render={() => (
          <Container className={classes.logbookPageWrapper}>
            <LogbookHeader />
            <LogbookNavigation />
            <Route
              exact
              path={paths.LOGBOOK_PAGE_PATH}
              render={(props) => protectedRoute(LogbookSummaryPage, props)}
            />
            <Route
              exact
              path={paths.LOGBOOK_DIET_PAGE_PATH}
              render={(props) => protectedRoute(LogbookDietPage, props)}
            />
            <Route
              exact
              path={paths.LOGBOOK_WORKOUT_PAGE_PATH}
              render={(props) => protectedRoute(LogbookWorkoutPage, props)}
            />
            <Route
              exact
              path={paths.LOGBOOK_MEASUREMENTS_PAGE_PATH}
              render={(props) => protectedRoute(LogbookMeasurementsPage, props)}
            />
          </Container>
        )}
      />

      {/* INGREDIENTS */}
      <Route
        exact
        path={paths.CREATE_INGREDIENT_PATH}
        render={(props) => protectedRoute(CreateIngredientPage, props)}
      />
      <Route
        path={paths.INGREDIENT_LIST_PATH}
        render={(props) => protectedRoute(IngredientListPage, props)}
      />

      {/* MEALS */}
      <Route
        exact
        path={paths.CREATE_MEAL_PATH}
        render={(props) => protectedRoute(CreateMealPage, props)}
      />
      <Route
        path={paths.MEAL_LIST_PATH}
        render={(props) => protectedRoute(MealListPage, props)}
      />

      {/* FOOD DAYS */}

      <Route
        exact
        path={paths.FOOD_DAYS_LIST_PATH}
        render={(props) => protectedRoute(FoodDayListPage, props)}
      />

      <Route
        exact
        path={paths.CREATE_FOOD_DAY_PATH}
        render={(props) => protectedRoute(CreateFoodDayPage, props)}
      />

      {/* OTHER */}
      <Route exact path={paths.NOT_ALLOWED_PATH} component={NotAllowedPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default AppRouter;

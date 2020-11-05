import React from "react";
import {
  Home,
  ExitToApp,
  AccountCircleOutlined,
  PersonAddOutlined,
  Dashboard,
  Explicit,
  Book,
} from "@material-ui/icons";
import * as paths from "constants/routesURL";
import { MainNavigationData } from "components/navigations/Main";

export const notAuthNav: MainNavigationData[] = [
  { text: "Home", to: paths.HOME_PAGE_PATH, icon: <Home /> },
  { text: "Login", to: paths.LOGIN_PAGE_PATH, icon: <AccountCircleOutlined /> },
  { text: "Signup", to: paths.SIGNUP_PAGE_PATH, icon: <PersonAddOutlined /> },
  // { txt: "About", to: paths., icon: <Info /> },
];

export const authNav: MainNavigationData[] = [
  { text: "Dashboard", to: paths.DASHBOARD_PAGE_PATH, icon: <Dashboard /> },
  { text: "My logbook", to: paths.LOGBOOK_PAGE_PATH, icon: <Book /> },
  { text: "Ingredients", to: paths.INGREDIENT_LIST_PATH, icon: <Explicit /> },
  { text: "Meals", to: paths.MEAL_LIST_PATH, icon: <Explicit /> },
  { text: "Food days", to: paths.FOOD_DAYS_LIST_PATH, icon: <Explicit /> },
  // { txt: "Schedule", to: "/dashboard/foodDays", icon: <Explicit /> },
  { text: "Logout", to: paths.HOME_PAGE_PATH, icon: <ExitToApp /> },
];

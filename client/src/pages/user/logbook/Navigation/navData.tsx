import React from "react";
import * as paths from "constants/routesURL";
import {
  Dashboard,
  Today,
  RestaurantTwoTone,
  FitnessCenterTwoTone,
} from "@material-ui/icons";

export interface BottomAction {
  label: string;
  icon: React.ReactElement;
  to: string;
}

export const navData: BottomAction[] = [
  {
    label: "Today",
    icon: <Dashboard />,
    to: paths.LOGBOOK_PAGE_PATH,
  },

  {
    label: "Diet",
    icon: <RestaurantTwoTone />,
    to: paths.LOGBOOK_DIET_PAGE_PATH,
  },

  {
    label: "Workout",
    icon: <FitnessCenterTwoTone />,
    to: paths.LOGBOOK_WORKOUT_PAGE_PATH,
  },
  {
    label: "Circuits",
    icon: <Today />,
    to: paths.LOGBOOK_MEASUREMENTS_PAGE_PATH,
  },
];

import React from "react";
import { SimpleSettingsMenu, HoveredCard } from "components";
import {
  CardHeader,
  Typography,
  Avatar,
  CardContent,
  Divider,
} from "@material-ui/core";
import { FoodDay } from "store/foodDaysReducer/interfaces/reducer";

import { useStyles } from "./styles";
import SingleMeal from "./SingleMeal";

export interface FoodDayCardProps {
  onEditClick: () => void;
  onDeleteClick: () => void;
  foodDay: FoodDay;
}

const FoodDayCard: React.FunctionComponent<FoodDayCardProps> = ({
  onEditClick,
  onDeleteClick,
  foodDay,
}) => {
  const classes = useStyles();

  return (
    <HoveredCard>
      <div className={classes.wrapper}>
        <CardHeader
          title={
            <Typography className={classes.cardTitle}>
              {foodDay.name}
            </Typography>
          }
          avatar={
            <div className={classes.avatarWrapper}>
              <Avatar
                className={classes.avatar}
                variant="rounded"
                aria-label="calories"
              >
                1231
              </Avatar>
              <Typography className={classes.avatarAfter}>kcal</Typography>
            </div>
          }
          action={
            <SimpleSettingsMenu
              onEditClick={() => onEditClick()}
              onDeleteClick={() => onDeleteClick()}
            />
          }
        />
        <Divider variant="middle" />
        <CardContent>
          {foodDay.mealsToFoodDay?.map((meal) => (
            <SingleMeal meal={meal} />
          ))}
        </CardContent>
      </div>
    </HoveredCard>
  );
};

export default FoodDayCard;

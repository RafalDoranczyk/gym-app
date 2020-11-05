import React, { useState } from "react";
import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { AttachMoney, ExpandMore, DonutSmall, List } from "@material-ui/icons";
import { SimpleSettingsMenu, HoveredCard } from "components";
import { Meal } from "store/mealsReducer/interfaces/reducer";
import ListContent from "./ListContent";
import ChartContent from "./ChartContent";
import { useStyles } from "./styles";
import { calcTotalValues } from "./utils";

export interface MealListElementProps {
  meal: Meal;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const MealListElement: React.FunctionComponent<MealListElementProps> = ({
  meal,
  onEditClick,
  onDeleteClick,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [cardContent, setCardContent] = useState<"ingredients" | "chart">(
    "ingredients"
  );

  const classes = useStyles({ cardContent });
  const { kcal, carbs, protein, fat, price } = calcTotalValues(meal);
  const { name, mealTypes, description } = meal;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <HoveredCard>
      <div className={classes.wrapper}>
        <CardHeader
          title={<span className={classes.cardTitle}>{name}</span>}
          subheader={
            <>
              {mealTypes.map((type) => (
                <Typography key={type} className={classes.subheaderSpan}>
                  <span> {type}</span>
                </Typography>
              ))}
            </>
          }
          avatar={
            <div className={classes.avatarWrapper}>
              <Avatar
                className={classes.avatar}
                variant="rounded"
                aria-label="kcal"
              >
                {kcal.toFixed(1)}
              </Avatar>
              <Typography className={classes.avatarAfter}>kcal</Typography>
            </div>
          }
          action={
            <SimpleSettingsMenu
              onEditClick={onEditClick}
              onDeleteClick={onDeleteClick}
            />
          }
        />

        <Divider variant="middle" component="div" />

        <CardContent className={classes.cardContent}>
          {cardContent === "chart" ? (
            <ChartContent carbs={carbs} protein={protein} fat={fat} />
          ) : (
            <ListContent mealIngredients={meal.ingredients} />
          )}
        </CardContent>

        <Divider
          component="div"
          className={classes.bottomDivider}
          variant="inset"
        />

        <CardActions disableSpacing>
          <div className={classes.priceWrapper}>
            <AttachMoney fontSize="inherit" color="primary" />
            <Typography className={classes.price}>{price} zł</Typography>
          </div>

          <Tooltip title="Ingredients">
            <IconButton
              className={classes.ingredientsIconButton}
              onClick={() => setCardContent("ingredients")}
              aria-label="show ingredients"
            >
              <List />
            </IconButton>
          </Tooltip>

          <Tooltip title="Chart">
            <IconButton
              className={classes.chartIconButton}
              onClick={() => setCardContent("chart")}
              aria-label="show chart"
            >
              <DonutSmall />
            </IconButton>
          </Tooltip>

          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography color="textPrimary" paragraph>
              Meal Description
            </Typography>
            <Typography color="textSecondary" paragraph>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </div>
    </HoveredCard>
  );
};

export default MealListElement;

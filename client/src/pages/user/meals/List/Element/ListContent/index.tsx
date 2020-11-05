import {
  Fade,
  Grow,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React from "react";
import { MealIngredient } from "store/mealsReducer/interfaces/reducer";
import { useStyles } from "./styles";

export interface ListContentProps {
  mealIngredients: MealIngredient[];
}

const ListContent: React.FunctionComponent<ListContentProps> = ({
  mealIngredients,
}) => {
  const classes = useStyles();

  return (
    <Fade in>
      <div>
        <Typography className={classes.title}>Ingredient list</Typography>
        <List className={classes.list} dense>
          {mealIngredients.map((ing, index) => {
            const { multiplier, ingredient, id } = ing;
            const { countType, kcal, name } = ingredient;
            const singleIngredientKcal = (kcal * multiplier).toFixed(1);

            const getFullIngredientString = (val: number, suffix: string) =>
              `${name} ${val * multiplier} ${suffix} `;

            let fullIngredientString = getFullIngredientString(1, "piece");

            if (countType === "100g") {
              fullIngredientString = getFullIngredientString(100, "g");
            } else if (countType === "1kg") {
              fullIngredientString = getFullIngredientString(1000, "g");
            }

            return (
              <Grow
                key={id}
                timeout={(index + 1) * 300}
                in={mealIngredients.length > 0}
              >
                <ListItem>
                  <Tooltip title="kcal">
                    <ListItemIcon className={classes.listItemKcal}>
                      {singleIngredientKcal}
                    </ListItemIcon>
                  </Tooltip>

                  <ListItemText
                    primary={
                      <Typography className={classes.listItemText}>
                        {fullIngredientString}
                      </Typography>
                    }
                  />
                </ListItem>
              </Grow>
            );
          })}
        </List>
      </div>
    </Fade>
  );
};

export default ListContent;

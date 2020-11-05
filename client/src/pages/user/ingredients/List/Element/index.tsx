import React from "react";
import {
  Typography,
  CardContent,
  CardHeader,
  Avatar,
  Divider,
  CardActions,
  useTheme,
} from "@material-ui/core";
import { AttachMoney } from "@material-ui/icons";
import { SimpleSettingsMenu, HoveredCard } from "components";
import { Ingredient } from "store/ingredientsReducer/interfaces/reducer";
import { StyledBar, useStyles } from "./styles";

export interface CardListElementProps {
  ingredient: Ingredient;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const CardListElement: React.FunctionComponent<CardListElementProps> = ({
  onEditClick,
  onDeleteClick,
  ingredient,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const { name, kcal, carbs, protein, fat, price, countType } = ingredient;

  const maxVal = carbs + fat + protein;

  const chartData = [
    {
      source: "Carbs",
      val: carbs || "-",
      color: theme.palette.carbs.light,
      percentValue: `${((carbs / maxVal) * 100).toFixed()}%`,
    },
    {
      source: "Protein",
      val: protein || "-",
      color: theme.palette.protein.light,
      percentValue: `${((protein / maxVal) * 100).toFixed()}%`,
    },
    {
      source: "Fat",
      val: fat || "-",
      color: theme.palette.fat.light,
      percentValue: `${((fat / maxVal) * 100).toFixed()}%`,
    },
  ];

  return (
    <HoveredCard>
      <div className={classes.wrapper}>
        <CardHeader
          title={<Typography className={classes.cardTitle}>{name}</Typography>}
          subheader={
            <Typography component="span" className={classes.subheaderSpan}>
              {countType}
            </Typography>
          }
          avatar={
            <div className={classes.avatarWrapper}>
              <Avatar
                className={classes.avatar}
                variant="rounded"
                aria-label="kcal"
              >
                {kcal}
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
        <Divider
          variant="inset"
          component="div"
          className={classes.topDivider}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.chartWrapper}>
            {chartData.map(({ source, percentValue, color, val }) => (
              <div key={source} className={classes.chartBarWrapper}>
                <Typography className={classes.chartBarName}>
                  {source}
                </Typography>
                <StyledBar percentValue={percentValue} color={color} />
                <Typography className={classes.chartBarValue}>{val}</Typography>
              </div>
            ))}
          </div>
        </CardContent>
        <Divider className={classes.bottomDivider} variant="inset" />
        <CardActions disableSpacing className={classes.cardActions}>
          <div className={classes.priceWrapper}>
            <AttachMoney className={classes.priceIcon} color="secondary" />
            <Typography className={classes.price}>{price} zł</Typography>
          </div>
        </CardActions>
      </div>
    </HoveredCard>
  );
};

export default CardListElement;

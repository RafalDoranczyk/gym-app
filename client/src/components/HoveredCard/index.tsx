import { Card, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    card: {
      position: "relative",
      boxShadow: theme.shadows[2],
      overflow: "visible",
      "&::before": {
        content: "''",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        boxShadow: theme.shadows[20],
        opacity: 0,
        transition: "opacity 500ms",
      },
      "&:hover::before": {
        opacity: 1,
      },
    },
  })
);

const HoveredCard: React.FunctionComponent = ({ children }) => {
  const { card } = useStyles();
  return <Card className={card}>{children}</Card>;
};

export default HoveredCard;

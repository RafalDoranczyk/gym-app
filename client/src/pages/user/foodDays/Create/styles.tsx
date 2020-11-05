import { createStyles, makeStyles, Theme } from "@material-ui/core";

const BOTTOM_SUMMARY_HEIGHT = 56;

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    container: {
      position: "relative",
      marginBottom: `${BOTTOM_SUMMARY_HEIGHT + 10}px`,
    },
    mealsWrapper: {},
    buttonsWraper: {
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "space-around",
      "& > *": {
        height: "50px",
        flexBasis: "45%",
        fontSize: "14px",
      },
    },
    foodDaySummary: {
      height: `${BOTTOM_SUMMARY_HEIGHT}px`,
      backgroundColor: theme.palette.background.paper,
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "space-around",
      borderRadius: "5px",
      zIndex: 2,
    },
    foodDaySummaryItem: {
      flexBasis: "20%",
      margin: "0, 3px",
      boxShadow: theme.shadows[2],
      textAlign: "center",
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "center",
      alignItems: "center",
      textTransform: "capitalize",
    },
    foodDaySummaryKey: {
      fontSize: "12px",
    },
    foodDaySummaryValue: {},
    carbs: {
      backgroundColor: theme.palette.carbs.normal,
      color: theme.palette.getContrastText(theme.palette.carbs.normal),
    },
    protein: {
      backgroundColor: theme.palette.protein.normal,
      color: theme.palette.getContrastText(theme.palette.protein.normal),
    },
    fat: {
      backgroundColor: theme.palette.fat.normal,
      color: theme.palette.getContrastText(theme.palette.fat.normal),
    },
  })
);

import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme, { expanded: boolean }>((theme) =>
  createStyles({
    nameInput: {
      margin: "0 2px 0 10px",
    },
    timeInput: {
      margin: "0 2px",
      width: "140px",
    },
    avatar: {
      backgroundColor: theme.palette.primary.light,
      opacity: (props) => (props.expanded ? 1 : 0.5),
      transition: ".3s linear opacity",
    },
    searchInput: {
      marginRight: "auto",
    },
    accordionDetails: {
      flexFlow: "column nowrap",
    },
    mealSummary: {
      height: "25px",
      opacity: (props) => (props.expanded ? 1 : 0.5),
      transition: ".3s linear opacity",
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      "& > *": {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
        flexBasis: "20%",
        textAlign: "center",
        color: theme.palette.text.primary,
        fontWeight: "bold",
        backgroundColor: theme.palette.background.paper,
      },
    },
    summaryTypo: {
      "&:nth-child(2n)": {
        borderLeft: `1px solid ${theme.palette.background.default}`,
        borderRight: `1px solid ${theme.palette.background.default}`,
      },
    },
  })
);

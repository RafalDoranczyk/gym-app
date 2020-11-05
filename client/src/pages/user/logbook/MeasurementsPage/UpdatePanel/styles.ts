import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    description: {
      margin: "15px 0",
      fontSize: "14px",
      maxWidth: "500px",
    },
    selectedDateInfo: {
      color: theme.palette.warning.main,
      textAlign: "center",
    },
    input: {
      flexBasis: "100%",
    },
    lastUpdate: {
      flexBasis: "100%",
    },
    submitButton: {
      flexBasis: "100%",
    },
  })
);

import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    description: {
      margin: "15px 0",
      padding: "5px",
      fontSize: "16px",
      maxWidth: "500px",
    },
    chartWrapper: {
      maxWidth: "1200px",
      marginTop: "25px",
    },
  })
);

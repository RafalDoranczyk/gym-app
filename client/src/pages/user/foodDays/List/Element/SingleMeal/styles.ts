import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      boxShadow: theme.shadows[3],
      height: "150px",
    },
  })
);

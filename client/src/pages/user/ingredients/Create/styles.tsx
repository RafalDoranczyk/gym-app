import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    dropdownWrapper: {
      maxWidth: "250px",
    },
  })
);

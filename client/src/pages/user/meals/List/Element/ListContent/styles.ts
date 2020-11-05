import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {},
    title: {
      fontSize: "14px",
      marginLeft: "10px",
    },
    listItemKcal: {
      textAlign: "center",
      fontSize: "13px",
      color: theme.palette.secondary.light,
    },
    listItemText: {
      textTransform: "capitalize",
      fontSize: "13px",
      color: theme.palette.text.secondary,
    },
  })
);

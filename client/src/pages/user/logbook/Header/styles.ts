import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      height: "60px",
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "center",
    },
    title: {
      fontWeight: "bold",
      fontSize: "22px",
      flexBasis: "40%",
    },
    datePicker: {
      flexBasis: "45%",
      marginLeft: "auto",
      maxWidth: "180px",
    },
    divider: {
      flexBasis: "60%",
      justifySelf: "flex-start",
      backgroundColor: theme.palette.primary.main,
    },
  })
);

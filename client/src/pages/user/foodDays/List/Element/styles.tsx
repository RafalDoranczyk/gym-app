import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "relative",
      overflow: "hidden",
      "&:hover *": {
        opacity: 1,
      },
    },
    cardTitle: {
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "14px",
    },
    subheaderSpan: {
      fontSize: "10px",
      display: "inline",
      textTransform: "capitalize",
    },
    avatarWrapper: {
      position: "relative",
    },
    avatarAfter: {
      position: "absolute",
      top: "65%",
      left: "50%",
      height: "12px",
      width: "100%",
      transform: "translate(-50%, 0)",
      fontSize: "10.5px",
      textAlign: "center",
      transition: ".1s linear opacity",
      color: theme.palette.text.secondary,
      opacity: 0,
    },
    avatar: {
      paddingBottom: "5px",
      fontSize: "14px",
      width: "50px",
      textAlign: "center",
      backgroundColor: "inherit",
      color: theme.palette.text.primary,
    },
  })
);

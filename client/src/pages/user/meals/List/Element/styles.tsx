import { createStyles, makeStyles, Theme } from "@material-ui/core";

export interface CardContent {
  cardContent: string;
}

export const useStyles = makeStyles<Theme, CardContent>((theme) =>
  createStyles({
    wrapper: {
      position: "relative",
      overflow: "hidden",
      "&:hover::before": {
        opacity: 1,
      },
      "&:hover $avatar": {
        opacity: "1",
      },
      "&:hover $avatarAfter": {
        opacity: "1",
      },
      "&:hover span": {
        opacity: 1,
      },
      "&:hover $bottomDivider": {
        transform: "translateX(0)",
        opacity: 1,
      },
    },
    cardTitle: {
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "13px",
    },
    subheaderSpan: {
      fontSize: "11px",
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
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      color: theme.palette.text.secondary,
      transition: ".1s linear opacity",
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
    cardContent: {
      height: "190px",
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: "2px",
        height: "2px",
      },
      "&::-webkit-scrollbar-button": {
        width: "2px",
        height: "2px",
      },
      "&::-webkit-scrollbar-thumb ": {
        background: theme.palette.primary.light,
        border: `0px none ${theme.palette.primary.light}`,
        borderRadius: "50px",
      },
    },
    bottomDivider: {
      backgroundColor: theme.palette.primary.light,
      opacity: 0.5,
      transform: "translateX(90px)",
      transition: ".1s linear transform",
    },
    iconButton: {
      color: theme.palette.primary.light,
    },
    priceWrapper: {
      margin: "0 auto 0 0",
      width: "30%",
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
    },
    price: {
      fontSize: "14px",
      fontStyle: "italic",
    },
    ingredientsIconButton: {
      // backgroundColor: props=> props.
    },
    chartIconButton: {
      // backgroundColor: props=> props.
    },
  })
);

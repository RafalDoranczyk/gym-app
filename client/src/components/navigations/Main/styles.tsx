import { makeStyles, createStyles, Theme } from "@material-ui/core";

const TOP_NAV_HEIGHT = 50;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topNav: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: `${TOP_NAV_HEIGHT}px`,
      boxShadow: theme.shadows[3],
      zIndex: 2,
      backgroundColor: theme.palette.primary.dark,
      "&  *": {
        color: theme.palette.getContrastText(theme.palette.primary.dark),
      },
    },
    badgesWrapper: {
      height: `${TOP_NAV_HEIGHT}px`,
      position: "absolute",
      right: "5vw",
      top: 0,
    },
    drawer: {
      padding: "0 20px",
    },
    linkItem: {
      height: "50px",
      "&:hover $link": {
        opacity: 1,
      },
      "&:hover $linkIcon": {
        opacity: 1,
        transform: "translateX(5px)",
      },
    },
    linkIcon: {
      opacity: 0.7,
      transition: ".1s linear opacity, .1s ease-in transform",
      color: theme.palette.secondary.light,
    },
  })
);

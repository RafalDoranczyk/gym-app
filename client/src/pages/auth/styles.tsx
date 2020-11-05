import { makeStyles, Theme, colors } from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    padding: "35px",
    boxShadow: `0px 2px 2px -3px rgba(0, 0, 0, 0.2),
        1px 1px 1px 1px rgba(0, 0, 0, 0.14)`,
  },
  formHead: {
    height: "100px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    position: "relative",
    color: colors.green["500"],
    textTransform: "uppercase",
    letterSpacing: "1px",
    "&::after": {
      content: "''",
      position: "absolute",
      top: "170%",
      left: "0",
      width: "55px",
      height: "6px",
      backgroundColor: colors.green["500"],
      borderRadius: "30px",
    },
  },

  formMiddle: {
    display: "flex",
    flexFlow: "column nowrap",
    padding: "0 20px",
  },

  submitButton: {
    textTransform: "uppercase",
    margin: "20px 0 0 auto",

    backgroundColor: colors.green["500"],
    color: "white",
    "&:hover": {
      backgroundColor: colors.green["400"],
    },
  },
  buttons: {
    height: "80px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  info: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    backgroundColor: theme.palette.grey[200],
  },
  infoParagraph: {},
}));

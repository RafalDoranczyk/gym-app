import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  chartWrapper: {
    height: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flexBasis: "100%",
    fontSize: "13px",
    marginLeft: "10px",
  },
});

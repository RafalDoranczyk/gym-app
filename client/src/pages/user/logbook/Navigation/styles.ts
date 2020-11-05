import { makeStyles } from "@material-ui/core/styles";
import shadows from "@material-ui/core/styles/shadows";

export const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    boxShadow: shadows[3],
    zIndex: 2,
    alignItems: "center",
  },
});

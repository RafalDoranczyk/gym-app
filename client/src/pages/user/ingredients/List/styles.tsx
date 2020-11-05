import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  ingredientWrapper: {
    marginTop: "15px",
  },
  noIngredientsWrapper: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translateX(-50%)",
    height: "100px",
    width: "70vw",
    maxWidth: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  foodDaysWrapper: {
    marginTop: "15px",
  },
  noFoodDaysWrapper: {
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

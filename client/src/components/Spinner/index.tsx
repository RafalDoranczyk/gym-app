import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  },
});

const Spinner: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <CircularProgress color="primary" />;
    </div>
  );
};

export default Spinner;

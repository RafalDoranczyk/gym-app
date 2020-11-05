import React from "react";
import { makeStyles, Snackbar, Theme } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useDispatch } from "react-redux";
import { useSelector, actions } from "store";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const SnackBar: React.FunctionComponent = () => {
  const {
    snackbar: { open, message, messageSeverity },
  } = useSelector((state) => state.request);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClose = (e?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(actions.handleSnackbar({ open: false }));
  };

  return (
    <div className={classes.wrapper}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert
          onClose={handleClose}
          severity={messageSeverity}
          elevation={6}
          variant="filled"
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;

import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";
import { useSelector } from "store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "300px",
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative",
    },
    buttonWrapper: {
      width: "200px",
    },
    buttonSuccess: {
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: "absolute",
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  })
);

const SubmitFormButton: React.FunctionComponent = () => {
  const classes = useStyles();
  const { isLoading } = useSelector((state) => state.loading);
  const { success } = useSelector((state) => state.request);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Fab
          type="submit"
          aria-label="save"
          color="primary"
          className={buttonClassname}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {isLoading && (
          <CircularProgress size={68} className={classes.fabProgress} />
        )}
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={isLoading}
        >
          Save
        </Button>
        {isLoading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
};

export default SubmitFormButton;

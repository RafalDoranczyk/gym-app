import React from "react";
import {
  makeStyles,
  Fab,
  Zoom,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      opacity: 0.8,
    },
  })
);

export interface CreateNewItemButtonProps {
  to: string;
}

const CreateNewItemButton: React.FunctionComponent<CreateNewItemButtonProps> = ({
  to,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom in timeout={transitionDuration} unmountOnExit>
      <Link to={to} className={classes.wrapper}>
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </Zoom>
  );
};

export default CreateNewItemButton;

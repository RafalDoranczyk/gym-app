import React from "react";
import {
  Typography,
  Divider,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    wrapper: {},
    title: {
      fontWeight: "bold",
      fontSize: "1.3rem",
    },
    divider: {
      margin: "12px 0",
      width: "80%",
      opacity: "0.5",
      backgroundColor: theme.palette.primary.light,
    },
  })
);

const CreatePageHeader: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title} gutterBottom>
        {children}
      </Typography>
      <Divider className={classes.divider} />
    </div>
  );
};

export default CreatePageHeader;

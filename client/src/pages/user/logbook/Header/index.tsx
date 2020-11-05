import { Divider, Typography } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import React from "react";
import { useDispatch } from "react-redux";
import { actions, useSelector } from "store";
import { useStyles } from "./styles";

const LogbookHeader: React.FunctionComponent = () => {
  const { selectedDate } = useSelector((state) => state.logbook);

  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography className={classes.title}>Logbook</Typography>
      <KeyboardDatePicker
        className={classes.datePicker}
        disableFuture
        autoOk
        size="small"
        format="dd/MM/yyyy"
        value={selectedDate}
        onChange={(date: any) => {
          dispatch(actions.handleSelectedDate(date));
        }}
      />
      <Divider component="div" className={classes.divider} />
    </div>
  );
};

export default LogbookHeader;

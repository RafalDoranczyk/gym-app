import React from "react";
import { Select, MenuItem, makeStyles, InputLabel } from "@material-ui/core";
import { Control, Controller } from "react-hook-form";

export interface DropDownButtonProps {
  values: string[];
  control: Control<Record<string, any>>;
  id: string;
  label: string;
}

const useStyles = makeStyles({
  select: {
    width: "100%",
    textTransform: "capitalize",
  },
  menuItem: {
    textTransform: "capitalize",
  },
});

const HookFormDropdown: React.FunctionComponent<DropDownButtonProps> = ({
  values,
  control,
  id,
  label,
}) => {
  const classes = useStyles();

  return (
    <>
      <InputLabel id={id}>{label}</InputLabel>
      <Controller
        className={classes.select}
        as={Select}
        control={control}
        labelId={id}
        defaultValue={values[0]}
        id={id}
        name={id}
      >
        {values.map((str) => (
          <MenuItem className={classes.menuItem} key={str} value={str}>
            {str}
          </MenuItem>
        ))}
      </Controller>
    </>
  );
};

export default HookFormDropdown;

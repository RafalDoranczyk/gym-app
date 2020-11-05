import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
} from "@material-ui/core";
import { Controller, Control } from "react-hook-form";

export interface UncontrolledRadioGroupProps {
  control: Control<Record<string, any>>;
  values: string[];
  id: string;
  label: string;
}

const HookFormRadioGroup: React.FunctionComponent<UncontrolledRadioGroupProps> = ({
  values,
  control,
  id,
  label,
}) => (
  <>
    <InputLabel id={id}>{label}</InputLabel>
    <Controller
      row
      as={RadioGroup}
      control={control}
      defaultValue={values[0]}
      id={id}
      name={id}
    >
      {values.map((value) => (
        <FormControlLabel
          key={value}
          value={value}
          control={<Radio />}
          label={value}
        />
      ))}
    </Controller>
  </>
);

export default HookFormRadioGroup;

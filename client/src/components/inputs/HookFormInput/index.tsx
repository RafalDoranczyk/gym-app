import React from "react";
import { InputLabelProps, InputProps, TextField } from "@material-ui/core";
import { UseFormMethods, ValidationRules } from "react-hook-form";

export interface HookFormInputInterface {
  id: string;
  type: string;
  label: string;
  validation: ValidationRules;
}

export interface HookFormInputProps {
  register: UseFormMethods["register"];
  errors: UseFormMethods["errors"];
  schema: HookFormInputInterface;
  additionalValidation?: ValidationRules;
  multiline?: boolean;
  rows?: number;
  inputLabelProps?: InputLabelProps;
  inputProps?: InputProps;
  changeableType?: string;
}

const HookFormInput: React.FunctionComponent<HookFormInputProps> = ({
  register,
  errors,
  schema,
  multiline,
  rows,
  inputLabelProps,
  inputProps,
  changeableType,
  additionalValidation,
}) => {
  const { validation, id, label, type } = schema;

  return (
    <TextField
      inputRef={register({
        ...additionalValidation,
        ...validation,
      })}
      id={id}
      name={id}
      error={!!errors[id]}
      label={errors[id] ? errors[id]?.message : label}
      type={changeableType || type}
      InputLabelProps={inputLabelProps}
      InputProps={inputProps}
      multiline={multiline}
      rows={rows}
      fullWidth
      autoComplete="off"
      variant="outlined"
      size="small"
    />
  );
};

export default HookFormInput;

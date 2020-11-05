import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export interface AsyncInputProps {
  onAsyncInputWrite: (value: string) => void;
  onAsyncInputClick: (value: any) => void;
  itemsArray: { name: string; [key: string]: any }[];
  label: string;
  isError: boolean;
}

const OnAsyncWriteInput: React.FunctionComponent<AsyncInputProps> = ({
  onAsyncInputWrite,
  onAsyncInputClick,
  itemsArray,
  label,
  isError,
}) => {
  const [options, setOptions] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const currentOptions = itemsArray.map((item) => item.name);
    setOptions(currentOptions);
  }, [itemsArray]);

  return (
    <Autocomplete
      size="small"
      style={{ width: "auto", minWidth: "230px" }}
      id="asynchronous"
      clearOnEscape
      open={open}
      onChange={(e, newValue) => {
        onAsyncInputClick(newValue);
        setValue("");
        setOptions([]);
      }}
      onOpen={() => {
        setOpen(true);
        setOptions([]);
      }}
      onClose={() => {
        setValue("");
        setOpen(false);
        setOptions([]);
      }}
      value={value}
      options={[value, ...options]}
      filterOptions={(options) => options.filter((option) => option !== value)}
      renderInput={(params) => (
        <TextField
          size="small"
          {...params}
          label={label}
          variant="outlined"
          error={isError}
          onChange={({ target }) => {
            setValue(target.value);
            onAsyncInputWrite(target.value);
          }}
        />
      )}
    />
  );
};

export default OnAsyncWriteInput;

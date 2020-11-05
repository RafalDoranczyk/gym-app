import React from "react";
import { Grid } from "@material-ui/core";
import { FormDialog, HookFormInput } from "components";
import { actions, dispatches, useSelector } from "store";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Meal } from "store/mealsReducer/interfaces/reducer";

const UpdateMealDialog: React.FunctionComponent<{ data: Meal }> = ({
  data,
}) => {
  const dispatch = useDispatch();
  console.log(data);
  const { errors, register, getValues, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = async () => {};

  return (
    <FormDialog onSubmit={onSubmit} title="Edit meal">
      kontent
    </FormDialog>
  );
};

export default UpdateMealDialog;

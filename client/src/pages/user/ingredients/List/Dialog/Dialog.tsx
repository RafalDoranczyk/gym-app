import React from "react";
import { Grid } from "@material-ui/core";
import { FormDialog, HookFormInput } from "components";
import { dispatches } from "store";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Ingredient } from "store/ingredientsReducer/interfaces/reducer";
import { inputs, UpdateIngredientFormInputs } from "../../Create/hookInputs";

export interface UpdateIngredientDialogProps {
  data: Ingredient;
}

const UpdateIngredientDialog: React.FunctionComponent<UpdateIngredientDialogProps> = ({
  data,
}) => {
  const dispatch = useDispatch();

  const { id, name, kcal, carbs, protein, fat, price } = data;
  const { errors, register, getValues, handleSubmit } = useForm<
    UpdateIngredientFormInputs
  >({
    defaultValues: {
      name,
      kcal,
      carbs,
      protein,
      fat,
      price,
    },
    mode: "onChange",
  });

  const onSubmit = async () => {
    const values = { ...getValues(), id };
    await dispatch(dispatches.updateUserIngredient(values));
  };

  return (
    <FormDialog onSubmit={handleSubmit(onSubmit)} title="Edit ingredient">
      {inputs.map((input) => (
        <Grid item key={input.id}>
          <HookFormInput
            inputLabelProps={{ shrink: true }}
            register={register}
            errors={errors}
            schema={input}
          />
        </Grid>
      ))}
    </FormDialog>
  );
};

export default UpdateIngredientDialog;

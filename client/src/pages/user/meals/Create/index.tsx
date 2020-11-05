import React, { useState } from "react";
import {
  Grid,
  Container,
  Fade,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
} from "@material-ui/core";
import {
  HookFormInput,
  SubmitFormButton,
  OnAsyncWriteInput,
  CreatePageHeader,
} from "components";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { actions, dispatches, useSelector } from "store";
import UseFetchOnMount from "hooks/useFetchOnMount";
import IngredientsTable from "./Table";
import { mealDescriptionInput, UseMealInputs } from "./hookInputs";
import { useStyles } from "./styles";

const CreateMealPage: React.FunctionComponent = () => {
  const {
    meals: { mealTypes, ingredientsForNewMeal },
    ingredients: { userIngredients },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  UseFetchOnMount(dispatches.fetchMealTypes);

  const { register, errors, handleSubmit, getValues, reset, control } = useForm<
    UseMealInputs
  >({
    mode: "onChange",
  });

  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const classes = useStyles({ isError: !!errors.mealTypes });

  const atLeastOne = () =>
    getValues("mealTypes").length ? true : "You have to pick at least one";

  const handleSelect = (checkedId: string) => {
    const newIds = checkedValues?.includes(checkedId)
      ? checkedValues?.filter((name) => name !== checkedId)
      : [...(checkedValues ?? []), checkedId];
    setCheckedValues(newIds);
    return newIds;
  };

  const onSearchIngredientsChange = (name: string) => {
    const idsToOmit = ingredientsForNewMeal.map((ing) => ing.ingredient.id);
    dispatch(dispatches.fetchUserIngredientsByName({ name, idsToOmit }));
  };

  const addIngredientToTable = (name: string) => {
    const ingredient = userIngredients.data.find((ing) => ing.name === name);
    if (ingredient) dispatch(actions.addIngredientToTable(ingredient));
  };

  const onSubmit = async () => {
    if (ingredientsForNewMeal.length === 0) {
      return;
    }
    await dispatch(dispatches.createUserMeal({ ...getValues() }));
    reset();
    setCheckedValues([]);
  };

  return (
    <Fade in>
      <Container maxWidth="md">
        <Grid
          direction="column"
          container
          component="form"
          noValidate
          spacing={2}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid item>
            <CreatePageHeader>Create new meal</CreatePageHeader>
          </Grid>

          <IngredientsTable register={register} errors={errors} />

          <Grid item md={6}>
            <OnAsyncWriteInput
              label={
                ingredientsForNewMeal.length === 0
                  ? "You have to add some ingredients"
                  : "Start typing to add ingredient"
              }
              isError={ingredientsForNewMeal.length === 0}
              itemsArray={userIngredients.data}
              onAsyncInputClick={addIngredientToTable}
              onAsyncInputWrite={onSearchIngredientsChange}
            />
          </Grid>

          <Grid item md={6}>
            <HookFormInput
              errors={errors}
              register={register}
              multiline
              rows={4}
              schema={mealDescriptionInput}
            />
          </Grid>

          <Grid item md={5}>
            <FormLabel className={classes.formLabel}>
              Pick at least one meal type
            </FormLabel>
            <Controller
              name="mealTypes"
              control={control}
              defaultValue={[]}
              rules={{ validate: atLeastOne }}
              render={(props) => (
                <FormGroup row>
                  {mealTypes.map((t) => (
                    <FormControlLabel
                      className={classes.checkboxLabel}
                      key={t}
                      label={t}
                      control={
                        <Checkbox
                          onChange={() => props.onChange(handleSelect(t))}
                          checked={checkedValues.includes(t)}
                        />
                      }
                    />
                  ))}
                </FormGroup>
              )}
            />
          </Grid>

          <Grid item md={6}>
            <SubmitFormButton>Save</SubmitFormButton>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default CreateMealPage;

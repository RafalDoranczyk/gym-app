import React from "react";
import { Grid, Container, Fade } from "@material-ui/core";
import {
  HookFormDropdown,
  HookFormInput,
  SubmitFormButton,
  HookFormRadioGroup,
  CreatePageHeader,
} from "components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { dispatches, useSelector } from "store";
import UseFetchOnMount from "hooks/useFetchOnMount";
import { inputs, UseCreateIngredientFormInputs } from "./hookInputs";
import { useStyles } from "./styles";

const CreateIngredientPage: React.FunctionComponent = () => {
  const {
    ingredients: { ingredientCountTypes, ingredientSourceTypes },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { register, errors, handleSubmit, control, getValues, reset } = useForm<
    UseCreateIngredientFormInputs
  >({ mode: "onChange" });

  UseFetchOnMount(dispatches.fetchIngredientTypes);

  const onSubmit = async () => {
    await dispatch(dispatches.createUserIngredient(getValues()));
    reset();
  };

  const classes = useStyles();

  return (
    <Fade in>
      <Container maxWidth="xs">
        <Grid
          component="form"
          noValidate
          direction="column"
          container
          spacing={3}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid item>
            <CreatePageHeader>Create new ingredient</CreatePageHeader>
          </Grid>

          {inputs.map((input) => (
            <Grid item key={input.id}>
              <HookFormInput
                errors={errors}
                register={register}
                schema={input}
              />
            </Grid>
          ))}

          <Grid item>
            <HookFormRadioGroup
              control={control}
              values={ingredientCountTypes}
              label="Pick count type"
              id="countType"
            />
          </Grid>

          <Grid item className={classes.dropdownWrapper}>
            <HookFormDropdown
              label="Pick source group"
              id="sourceType"
              control={control}
              values={ingredientSourceTypes}
            />
          </Grid>

          <Grid item>
            <SubmitFormButton>Save</SubmitFormButton>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default CreateIngredientPage;

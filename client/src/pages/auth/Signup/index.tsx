import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { dispatches } from "store";
import { UseSignupFormInputs } from "./hookInputs";
import SignupPage from "./Page";

const SignupPageContainer: React.FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const { register, errors, handleSubmit, getValues, watch } = useForm<
    UseSignupFormInputs
  >({ mode: "onChange" });

  const dispatch = useDispatch();

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = (
    id: UseSignupFormInputs["password"] | UseSignupFormInputs["password2"]
  ) =>
    id === "password"
      ? setShowPassword(!showPassword)
      : setShowRepeatPassword(!showRepeatPassword);

  const onSubmit = async () => {
    await dispatch(dispatches.signupUser(getValues()));
  };

  return (
    <SignupPage
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      register={register}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      showRepeatPassword={showRepeatPassword}
      watch={watch}
    />
  );
};

export default SignupPageContainer;

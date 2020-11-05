import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { dispatches } from "store";
import { UseLoginFormInputs } from "./hookInputs";
import LoginPage from "./Page";

const LoginPageContainer: React.FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, errors, handleSubmit, getValues } = useForm<
    UseLoginFormInputs
  >({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = () => {
    dispatch(dispatches.loginUser(getValues()));
  };

  return (
    <LoginPage
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      register={register}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
    />
  );
};

export default LoginPageContainer;

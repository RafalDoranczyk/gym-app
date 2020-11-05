import { HookFormInputInterface } from "components/inputs/HookFormInput";
import { SignupRequest } from "services/auth/interfaces";
import { loginInputs } from "../Login/hookInputs";

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 24;

export type UseSignupFormInputs = SignupRequest;

export interface FormInput extends HookFormInputInterface {
  id: keyof UseSignupFormInputs;
}

export const signupInputs: FormInput[] = [
  loginInputs[0],
  {
    id: "username",
    type: "text",
    label: "Username",
    validation: {
      required: "Username is required",
      minLength: {
        value: USERNAME_MIN_LENGTH,
        message: "Username is too short",
      },
      maxLength: {
        value: USERNAME_MAX_LENGTH,
        message: "Username is too long",
      },
    },
  },
  loginInputs[1],
  {
    id: "password2",
    type: "password",
    label: "Repeat your password",
    validation: {
      required: "Repeat your password",
    },
  },
];

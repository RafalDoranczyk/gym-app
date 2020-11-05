import { HookFormInputInterface } from "components/inputs/HookFormInput";
import { LoginRequest } from "services/auth/interfaces";

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 128;

export type UseLoginFormInputs = LoginRequest;

export interface LoginFormInput extends HookFormInputInterface {
  id: keyof UseLoginFormInputs;
}

export const loginInputs: LoginFormInput[] = [
  {
    id: "email",
    type: "email",
    label: "Your email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid email format",
      },
    },
  },
  {
    id: "password",
    type: "password",
    label: "Your password",
    validation: {
      required: "Password is required",
      minLength: {
        value: PASSWORD_MIN_LENGTH,
        message: "Password is too short",
      },
      maxLength: {
        value: PASSWORD_MAX_LENGTH,
        message: "Password is too long",
      },
    },
  },
];

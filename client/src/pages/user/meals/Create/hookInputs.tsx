import { HookFormInputInterface } from "components/inputs/HookFormInput";
import { Meal } from "store/mealsReducer/interfaces/reducer";

export const MEAL_NAME_MIN_LENGTH = 6;
export const MEAL_NAME_MAX_LENGTH = 128;
export const MEAL_DESCRIPTION_MIN_LENGTH = 4;

export type UseMealInputs = Pick<Meal, "mealTypes" | "name" | "description">;

export interface CreateMealInputs extends HookFormInputInterface {
  id: keyof Pick<UseMealInputs, "name" | "description">;
}

export const mealDescriptionInput: CreateMealInputs = {
  id: "description",
  type: "text",
  label: "Place for your meal description",
  validation: {
    required: "Description is required",
    minLength: {
      value: MEAL_DESCRIPTION_MIN_LENGTH,
      message: "Description too short",
    },
  },
};

export const mealNameInput: CreateMealInputs = {
  id: "name",
  type: "text",
  label: "Meal name",
  validation: {
    required: "Name is required",
    minLength: {
      value: MEAL_NAME_MIN_LENGTH,
      message: "Name is too short",
    },
    maxLength: {
      value: MEAL_NAME_MAX_LENGTH,
      message: "Name is too long",
    },
  },
};

import { FoodDay } from "store/foodDaysReducer/interfaces/reducer";
import { HookFormInputInterface } from "components/inputs/HookFormInput";

export const FOOD_DAY_NAME_MIN_LENGTH = 6;
export const FOOD_DAY_NAME_MAX_LENGTH = 128;

export type UseFoodDayInputs = Omit<FoodDay, "id" | "createdAt" | "meals">;

export interface FoodDayInput extends HookFormInputInterface {
  id: keyof UseFoodDayInputs;
}

const isRequiredString = (name: string) => `${name} is required`;

export const foodDayNameInput: FoodDayInput = {
  id: "name",
  type: "text",
  label: "Food day name",
  validation: {
    required: isRequiredString("Name"),
    minLength: {
      value: FOOD_DAY_NAME_MIN_LENGTH,
      message: "Name is too short",
    },
    maxLength: {
      value: FOOD_DAY_NAME_MAX_LENGTH,
      message: "Name is too long",
    },
  },
};

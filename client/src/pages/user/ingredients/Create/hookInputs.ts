import { HookFormInputInterface } from "components/inputs/HookFormInput";
import { CreateUserIngredientRequest } from "services/ingredients/interfaces";

export const INGREDIENT_NAME_MIN_LENGTH = 3;
export const INGREDIENT_NAME_MAX_LENGTH = 24;

export const INGREDIENT_MAX_NUMBER = 9999;
export const INGREDIENT_MIN_NUMBER = 0;

export type UseCreateIngredientFormInputs = CreateUserIngredientRequest;

export interface CreateIngredientFormInputs extends HookFormInputInterface {
  id: keyof CreateUserIngredientRequest;
}

export type UpdateIngredientFormInputs = Omit<
  UseCreateIngredientFormInputs,
  "countType" | "sourceType"
>;

const isRequiredString = (name: string) => `${name} is required`;

export const inputs: CreateIngredientFormInputs[] = [
  {
    id: "name",
    type: "text",
    label: "Ingredient name",
    validation: {
      required: isRequiredString("Name"),
      minLength: {
        value: INGREDIENT_NAME_MIN_LENGTH,
        message: "Name is too short",
      },
      maxLength: {
        value: INGREDIENT_NAME_MAX_LENGTH,
        message: "Name is too long",
      },
    },
  },
  {
    id: "kcal",
    type: "number",
    label: "Kcal",
    validation: {
      required: isRequiredString("Kcal"),
      max: {
        value: INGREDIENT_MAX_NUMBER,
        message: "Max 9999",
      },
      min: {
        value: INGREDIENT_MIN_NUMBER,
        message: "Min 0",
      },
    },
  },
  {
    id: "carbs",
    type: "number",
    label: "Carbohydrates",
    validation: {
      required: isRequiredString("Carbohydrates"),
      max: {
        value: INGREDIENT_MAX_NUMBER,
        message: "Max 9999",
      },
      min: {
        value: INGREDIENT_MIN_NUMBER,
        message: "Min 0",
      },
    },
  },
  {
    id: "protein",
    type: "number",
    label: "Protein",
    validation: {
      required: isRequiredString("Protein"),
      max: {
        value: INGREDIENT_MAX_NUMBER,
        message: "Max 9999",
      },
      min: {
        value: INGREDIENT_MIN_NUMBER,
        message: "Min 0",
      },
    },
  },
  {
    id: "fat",
    type: "number",
    label: "Fat",
    validation: {
      required: isRequiredString("Fat"),
      max: {
        value: INGREDIENT_MAX_NUMBER,
        message: "Max 9999",
      },
      min: {
        value: INGREDIENT_MIN_NUMBER,
        message: "Min 0",
      },
    },
  },
  {
    id: "price",
    type: "number",
    label: "Price",
    validation: {
      required: isRequiredString("Price"),
      max: {
        value: INGREDIENT_MAX_NUMBER,
        message: "Max 9999",
      },
      min: {
        value: INGREDIENT_MIN_NUMBER,
        message: "Min 0",
      },
    },
  },
];

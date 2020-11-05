import { IngredientForNewMeal } from "store/mealsReducer/interfaces/reducer";

export type CalcIngredientValuesReturn = {
  kcal: number;
  carbs: number;
  protein: number;
  fat: number;
  price: number;
  carbsPercentage: number;
  proteinPercentage: number;
  fatPercentage: number;
};

export const calcValuesForInredient = (
  ingredientToMeal: IngredientForNewMeal
): CalcIngredientValuesReturn => {
  const { ingredient, multiplier } = ingredientToMeal;
  const { kcal, carbs, protein, fat, price } = ingredient;

  const totalValues = {
    kcal: +(multiplier * kcal).toFixed(),
    carbs: +(multiplier * carbs).toFixed(),
    protein: +(multiplier * protein).toFixed(),
    fat: +(multiplier * fat).toFixed(),
    price: +(multiplier * price).toFixed(2),
    carbsPercentage: +(((carbs * 4) / kcal) * 100).toFixed(),
    proteinPercentage: +(((protein * 4) / kcal) * 100).toFixed(),
    fatPercentage: +(((fat * 9) / kcal) * 100).toFixed(),
  };

  return totalValues;
};

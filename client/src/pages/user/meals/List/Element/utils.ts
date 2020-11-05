import { Meal } from "store/mealsReducer/interfaces/reducer";

export type CalcTotalValuesReturn = {
  kcal: number;
  carbs: number;
  protein: number;
  fat: number;
  price: number;
};

export const calcTotalValues = (meal: Meal): CalcTotalValuesReturn => {
  const totalValues = {
    kcal: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
    price: 0,
  };

  meal.ingredients.forEach((ing) => {
    const { kcal, carbs, protein, fat, price } = ing.ingredient;
    const mult = ing.multiplier;
    totalValues.kcal += mult * kcal;
    totalValues.carbs += mult * carbs;
    totalValues.protein += mult * protein;
    totalValues.fat += mult * fat;
    totalValues.price += mult * price;
  });

  return totalValues;
};

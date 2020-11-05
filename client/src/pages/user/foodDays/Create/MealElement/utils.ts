import { IngredientForNewMeal } from "store/mealsReducer/interfaces/reducer";
import { SummedValues } from "../utils";

export const getSummedMealValues = (
  ingredientToMeal: IngredientForNewMeal[]
): SummedValues => {
  const total = ingredientToMeal.reduce(
    (
      prevVal,
      { ingredient: { kcal, carbs, protein, fat, price }, multiplier }
    ) => {
      return {
        kcal: prevVal.kcal + kcal * multiplier,
        carbs: prevVal.carbs + carbs * multiplier,
        protein: prevVal.protein + protein * multiplier,
        fat: prevVal.fat + fat * multiplier,
        price: prevVal.price + price * multiplier,
      };
    },
    { kcal: 0, carbs: 0, protein: 0, fat: 0, price: 0 }
  );

  return total;
};

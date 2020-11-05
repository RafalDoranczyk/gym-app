import { MealForNewFoodDay } from "store/foodDaysReducer/interfaces/reducer";

export interface SummedValues {
  kcal: number;
  carbs: number;
  protein: number;
  fat: number;
  price: number;
}

export const getSummedFoodDaysValues = (
  meals: MealForNewFoodDay[]
): SummedValues => {
  const total = { kcal: 0, carbs: 0, protein: 0, fat: 0, price: 0 };
  meals.forEach((m) => {
    m.ingredients.forEach(
      ({ ingredient: { kcal, carbs, protein, fat, price }, multiplier }) => {
        total.kcal += kcal * multiplier;
        total.carbs += carbs * multiplier;
        total.protein += protein * multiplier;
        total.fat += fat * multiplier;
        total.price += price * multiplier;
      }
    );
  });

  return total;
};

import {
  IngredientForNewMeal,
  MealIngredient,
} from "store/mealsReducer/interfaces/reducer";

export interface FoodDaysReducerState {
  readonly userFoodDays: UserFoodDays;
  readonly mealsForNewFoodDay: MealForNewFoodDay[];
}

export interface UserFoodDays {
  data: FoodDay[];
  count: number;
}

export interface FoodDay {
  id: number;
  createdAt: string;
  name: string;
  mealsToFoodDay: FoodDayMeal[];
}

export interface FoodDayMeal {
  id: number;
  time: string;
  name: string;
  ingredients: MealIngredient[];
}

export interface MealForNewFoodDay {
  id: number;
  name: string;
  time: string;
  ingredients: IngredientForNewMeal[];
}

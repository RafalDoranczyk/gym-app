import { FoodDay } from "store/foodDaysReducer/interfaces/reducer";

export interface FetchALlFoodDaysRequest {
  page: number;
}

export interface FetchALlFoodDaysResponse {
  data: FoodDay[];
  count: number;
}

export interface MealsToFoodDay {
  name: string;
  time: string;
  ingredients: {
    multiplier: number;
    id: number;
  }[];
}

export interface CreateFoodDayRequest {
  name: string;
  mealsToFoodDay: MealsToFoodDay[];
}

export interface CreateFoodDayResponse {
  data: FoodDay;
}

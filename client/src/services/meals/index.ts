import axios from "helpers/axiosInstance";
import { MEALS_URL, MEAL_TYPES_URL } from "constants/apiURL";
import * as I from "./interfaces";

const MealsService = () => {
  const fetchMealTypes = async () => {
    try {
      const { data } = await axios.get<I.FetchMealTypesResponse>(
        MEAL_TYPES_URL
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const fetchUserMeals = async (payload: I.FetchUserMealsRequest) => {
    try {
      const { data } = await axios.get<I.FetchUserMealsResponse>(MEALS_URL, {
        params: payload,
      });

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const createUserMeal = async (payload: I.CreateUserMealRequest) => {
    try {
      const { data } = await axios.post<I.CreateUserMealResponse>(
        MEALS_URL,
        payload
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const deleteUserMeal = async (payload: I.DeleteUserMealRequest) => {
    try {
      const { data } = await axios.delete<I.DeleteUserMealResponse>(MEALS_URL, {
        params: payload,
      });

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    fetchMealTypes,
    fetchUserMeals,
    createUserMeal,
    deleteUserMeal,
  };
};

export default MealsService();

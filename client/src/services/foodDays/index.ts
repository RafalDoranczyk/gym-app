import axios from "helpers/axiosInstance";
import { FOOD_DAYS_URL } from "constants/apiURL";
import * as I from "./interfaces";

const FoodDaysService = () => {
  const create = async (payload: I.CreateFoodDayRequest) => {
    try {
      const { data } = await axios.post<I.CreateFoodDayResponse>(
        FOOD_DAYS_URL,
        payload
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const fetchAll = async (payload: I.FetchALlFoodDaysRequest) => {
    try {
      const { data } = await axios.get<I.FetchALlFoodDaysResponse>(
        FOOD_DAYS_URL,
        {
          params: payload,
        }
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return { create, fetchAll };
};

export default FoodDaysService();

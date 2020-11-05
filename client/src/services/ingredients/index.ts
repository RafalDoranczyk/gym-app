import axios from "helpers/axiosInstance";
import { INGREDIENTS_URL, INGREDIENT_TYPES_URL } from "constants/apiURL";
import * as I from "./interfaces";

const IngredientsService = () => {
  const fetchIngredientTypes = async () => {
    try {
      const { data } = await axios.get<I.FetchIngredientTypesResponse>(
        INGREDIENT_TYPES_URL
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const fetchUserIngredients = async (
    payload: I.FetchUserIngredientsRequest
  ) => {
    try {
      const { data } = await axios.get<I.FetchUserIngredientsResponse>(
        INGREDIENTS_URL,
        {
          params: payload,
        }
      );
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const fetchuserIngredientsByName = async (
    payload: I.FetchUserIngredientsByNameRequest
  ) => {
    try {
      const { name, idsToOmit } = payload;
      const { data } = await axios.get<I.FetchUserIngredientsByNameResponse>(
        INGREDIENTS_URL,
        {
          params: {
            name: name.toLowerCase(),
            idsToOmit: idsToOmit.length > 0 ? JSON.stringify(idsToOmit) : null,
          },
        }
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const createUserIngredient = async (
    payload: I.CreateUserIngredientRequest
  ) => {
    try {
      const { data } = await axios.post<I.CreateUserIngredientResponse>(
        INGREDIENTS_URL,
        payload
      );

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const updateUserIngredient = async (
    payload: I.UpdateUserIngredientRequest
  ) => {
    try {
      const data = await axios.patch<I.UpdateUserIngredientResponse>(
        INGREDIENTS_URL,
        payload
      );

      return data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const deleteUserIngredient = async (
    payload: I.DeleteUserIngredientRequest
  ) => {
    try {
      const { data } = await axios.delete<I.DeleteUserIngredientResponse>(
        INGREDIENTS_URL,
        {
          params: payload,
        }
      );
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    fetchIngredientTypes,
    fetchUserIngredients,
    fetchuserIngredientsByName,
    createUserIngredient,
    deleteUserIngredient,
    updateUserIngredient,
  };
};

export default IngredientsService();

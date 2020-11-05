import {
  Ingredient,
  IngredientCountTypes,
  IngredientSourceTypes,
} from "store/ingredientsReducer/interfaces/reducer";

export interface FetchIngredientTypesResponse {
  data: {
    sourceTypes: IngredientSourceTypes;
    countTypes: IngredientCountTypes;
  };
}

export interface FetchUserIngredientsRequest {
  filterString: string;
  page: number;
}

export interface FetchUserIngredientsResponse {
  data: Ingredient[];
  count: number;
}

export interface FetchUserIngredientsByNameRequest {
  name: Ingredient["name"];
  idsToOmit: Ingredient["id"][];
}

export interface FetchUserIngredientsByNameResponse {
  data: Ingredient[];
}

export type CreateUserIngredientRequest = Omit<
  Ingredient,
  "id" | "createdAt" | "updatedAt"
>;

export interface CreateUserIngredientResponse {
  data: Ingredient;
  message: string;
}

export interface DeleteUserIngredientRequest {
  id: Ingredient["id"];
}

export interface DeleteUserIngredientResponse {
  id: Ingredient["id"];
  message: string;
}

export type UpdateUserIngredientRequest = Omit<
  Ingredient,
  "createdAt" | "updatedAt" | "sourceType" | "countType"
>;

export interface UpdateUserIngredientResponse {
  data: Ingredient;
  message: string;
}

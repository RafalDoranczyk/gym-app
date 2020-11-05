export interface IngredientsReducerState {
  readonly userIngredients: UserIngredients;
  readonly ingredientSourceTypes: IngredientSourceTypes;
  readonly ingredientCountTypes: IngredientCountTypes;
}

export interface UserIngredients {
  data: Ingredient[];
  count: number;
}

export interface Ingredient {
  readonly id: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly name: string;
  readonly kcal: number;
  readonly carbs: number;
  readonly protein: number;
  readonly fat: number;
  readonly price: number;
  readonly sourceType: string;
  readonly countType: CountTypes;
}

export type IngredientSourceTypes = string[];

export type IngredientCountTypes = CountTypes[];

export type CountTypes = "1 piece" | "100g" | "1kg";

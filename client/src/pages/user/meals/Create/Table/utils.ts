import { IngredientForNewMeal } from "store/mealsReducer/interfaces/reducer";

export type Order = "asc" | "desc";

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const calcValuesForMeal = (ingredientToMeal: IngredientForNewMeal[]) => {
  const total = ingredientToMeal.reduce(
    (prevVal, current) => {
      return {
        kcal: prevVal.kcal + current.ingredient.kcal * current.multiplier,
        carbs: prevVal.carbs + current.ingredient.carbs * current.multiplier,
        protein:
          prevVal.protein + current.ingredient.protein * current.multiplier,
        fat: prevVal.fat + current.ingredient.fat * current.multiplier,
        price: prevVal.price + current.ingredient.price * current.multiplier,
      };
    },
    { kcal: 0, carbs: 0, protein: 0, fat: 0, price: 0 }
  );

  return total;
};

interface HeadCell {
  id: keyof IngredientForNewMeal["ingredient"];
  label: string;
}

export const headCells: HeadCell[] = [
  { id: "name", label: "Name" },
  { id: "countType", label: "Count" },
  { id: "kcal", label: "Calories" },
  { id: "carbs", label: "Carbs (g)" },
  { id: "protein", label: "Protein(g)" },
  { id: "fat", label: "Fat (g)" },
  { id: "price", label: "Price" },
];

export type CalcIngredientValuesReturn = {
  kcal: number;
  carbs: number;
  protein: number;
  fat: number;
  price: number;
  carbsPercentage: number;
  proteinPercentage: number;
  fatPercentage: number;
};

export const calcValuesForInredient = (
  ingredientToMeal: IngredientForNewMeal
): CalcIngredientValuesReturn => {
  const { ingredient, multiplier } = ingredientToMeal;
  const { kcal, carbs, protein, fat, price } = ingredient;

  const totalValues = {
    kcal: +(multiplier * kcal).toFixed(2),
    carbs: +(multiplier * carbs).toFixed(2),
    protein: +(multiplier * protein).toFixed(2),
    fat: +(multiplier * fat).toFixed(2),
    price: +(multiplier * price).toFixed(2),
    carbsPercentage: +(((carbs * 4) / kcal) * 100).toFixed(),
    proteinPercentage: +(((protein * 4) / kcal) * 100).toFixed(),
    fatPercentage: +(((fat * 9) / kcal) * 100).toFixed(),
  };

  return totalValues;
};

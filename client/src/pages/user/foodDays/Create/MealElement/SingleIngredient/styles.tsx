import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    container: {
      margin: "15px 0",
      color: theme.palette.text.secondary,
      display: "grid",
      gridTemplateColumns: "repeat(10, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
      gridTemplateAreas: `
      "number input input input input name name name name button"
      "kcal kcal kcal carbs carbs protein protein fat fat price"
      "kcalNumber kcalNumber kcalNumber carbsNumber carbsNumber proteinNumber proteinNumber fatNumber fatNumber priceNumber"
      `,
      gap: "2px",
      textTransform: "capitalize",
      boxShadow: theme.shadows[1],
      "&> *": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: theme.shadows[1],
      },
    },
    number: {
      gridArea: "number",
      padding: "5px",
      backgroundColor: theme.palette.background.default,
      borderTopLeftRadius: "14px",
    },
    input: {
      padding: "5px 10px",
      gridArea: "input",
      backgroundColor: theme.palette.background.default,
    },
    name: {
      gridArea: "name",
      fontSize: "12px",
      backgroundColor: theme.palette.background.default,
    },
    deleteButton: {
      gridArea: "button",
      borderRadius: 0,
      color: theme.palette.error.dark,
      backgroundColor: theme.palette.background.default,
    },
    kcal: {
      gridArea: "kcal",
    },
    carbs: {
      gridArea: "carbs",
      backgroundColor: theme.palette.carbs.normal,
      color: theme.palette.getContrastText(theme.palette.carbs.normal),
    },
    protein: {
      gridArea: "protein",
      backgroundColor: theme.palette.protein.normal,
      color: theme.palette.getContrastText(theme.palette.protein.normal),
    },
    fat: {
      gridArea: "fat",
      backgroundColor: theme.palette.fat.normal,
      color: theme.palette.getContrastText(theme.palette.fat.normal),
    },
    price: {
      gridArea: "price",
    },
    kcalNumber: {
      gridArea: "kcalNumber",
      color: theme.palette.text.primary,
    },
    carbsNumber: {
      gridArea: "carbsNumber",
      backgroundColor: theme.palette.carbs.light,
      color: theme.palette.getContrastText(theme.palette.carbs.light),
    },
    proteinNumber: {
      gridArea: "proteinNumber",
      backgroundColor: theme.palette.protein.light,
      color: theme.palette.getContrastText(theme.palette.protein.light),
    },
    fatNumber: {
      gridArea: "fatNumber",
      backgroundColor: theme.palette.fat.light,
      color: theme.palette.getContrastText(theme.palette.fat.light),
    },
    priceNumber: {
      gridArea: "priceNumber",
      color: theme.palette.text.primary,
    },
  })
);

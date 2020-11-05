import React, { useState } from "react";
import * as M from "@material-ui/core";
import { Delete, FilterList } from "@material-ui/icons";
import clsx from "clsx";
import { mealNameInput } from "pages/user/meals/Create/hookInputs";
import { UseFormMethods } from "react-hook-form";
import { HookFormInput } from "components";
import { useDispatch } from "react-redux";
import { actions, useSelector } from "store";
import { IngredientForNewMeal } from "store/mealsReducer/interfaces/reducer";
import { HandleIngredientInTableMultiplier } from "store/mealsReducer/interfaces/actions";
import { useStyles } from "./styles";
import {
  getComparator,
  stableSort,
  headCells,
  calcValuesForMeal,
  calcValuesForInredient,
  Order,
} from "./utils";

export interface IngredientsTableProps {
  register: UseFormMethods["register"];
  errors: UseFormMethods["errors"];
}

const IngredientsTable: React.FunctionComponent<IngredientsTableProps> = ({
  register,
  errors,
}) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<
    keyof IngredientForNewMeal["ingredient"]
  >("name");
  const [selected, setSelected] = useState<number[]>([]);
  const { ingredientsForNewMeal } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = ingredientsForNewMeal.map((i) => i.ingredient.id);
      setSelected(newSelecteds);
    }
  };

  const handleRequestSort = (
    e: React.MouseEvent<unknown>,
    property: keyof IngredientForNewMeal["ingredient"]
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClickItem = (e: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleIngredientMultiplier = ({
    id,
    value,
  }: HandleIngredientInTableMultiplier["payload"]) => {
    dispatch(actions.handleIngredientInTableMultiplier({ id, value }));
  };

  const removeIngredientsFromTable = () => {
    dispatch(actions.removeIngredientFromTable(selected));
    setSelected([]);
  };

  const classes = useStyles();
  const numSelected = selected.length;
  const rowCount = ingredientsForNewMeal.length;
  const totalValues = calcValuesForMeal(ingredientsForNewMeal);

  return (
    <M.Paper className={classes.wrapper}>
      {/* TABLE TOOLBAR */}
      <M.Toolbar
        className={clsx(classes.toolbar, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <M.Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </M.Typography>
        ) : (
          <HookFormInput
            register={register}
            errors={errors}
            schema={mealNameInput}
          />
        )}
        {numSelected > 0 ? (
          <M.Tooltip title="Delete">
            <M.IconButton
              onClick={removeIngredientsFromTable}
              aria-label="delete"
            >
              <Delete />
            </M.IconButton>
          </M.Tooltip>
        ) : (
          <M.Tooltip title="Filter list">
            <M.IconButton aria-label="filter list">
              <FilterList />
            </M.IconButton>
          </M.Tooltip>
        )}
      </M.Toolbar>

      {/* TABLE TOOLBAR END */}
      <M.TableContainer>
        <M.Table
          aria-labelledby="ingredients table"
          aria-label="ingredients table"
        >
          {/* TABLE HEAD */}
          <M.TableHead>
            <M.TableRow>
              <M.TableCell padding="checkbox">
                <M.Checkbox
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onChange={handleSelectAllClick}
                  inputProps={{ "aria-label": "select all" }}
                />
              </M.TableCell>
              {headCells.map((headCell) => (
                <M.TableCell
                  key={headCell.id}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <M.TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={(e) => handleRequestSort(e, headCell.id)}
                  >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <span className={classes.visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </span>
                    ) : null}
                  </M.TableSortLabel>
                </M.TableCell>
              ))}
            </M.TableRow>
          </M.TableHead>
          {/* TABLE HEAD END */}

          {/* TABLE BODY */}
          <M.TableBody>
            {stableSort(
              ingredientsForNewMeal.map((i) => i.ingredient),
              getComparator(order, orderBy)
            ).map((row, index) => {
              const isItemSelected = selected.indexOf(row.id) !== -1;
              const labelId = `enhanced-table-checkbox-${index}`;

              const multiplier = ingredientsForNewMeal.find(
                (ing) => ing.ingredient.id === row.id
              )?.multiplier;

              const {
                kcal,
                carbs,
                protein,
                fat,
                price,
              } = calcValuesForInredient({
                ingredient: row,
                multiplier: multiplier || 0,
              });

              let defaultValue = 1;

              if (row.countType === "100g") {
                defaultValue = 100;
              } else if (row.countType === "1kg") {
                defaultValue = 1000;
              }

              return (
                <M.TableRow
                  style={{
                    textTransform: "capitalize",
                  }}
                  hover
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                >
                  <M.TableCell padding="checkbox">
                    <M.Checkbox
                      onClick={(event) => handleClickItem(event, row.id)}
                      checked={isItemSelected}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </M.TableCell>
                  <M.TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {row.name}
                  </M.TableCell>

                  <M.TableCell align="right">
                    <M.TextField
                      defaultValue={defaultValue}
                      style={{ maxWidth: "60px" }}
                      id={`${row.name}Value`}
                      onChange={(e) =>
                        handleIngredientMultiplier({
                          id: row.id,
                          value: +e.target.value,
                        })
                      }
                    />
                  </M.TableCell>
                  <M.TableCell align="right">{kcal}</M.TableCell>
                  <M.TableCell align="right">{carbs}</M.TableCell>
                  <M.TableCell align="right">{protein}</M.TableCell>
                  <M.TableCell align="right">{fat}</M.TableCell>
                  <M.TableCell align="right">{price}</M.TableCell>
                </M.TableRow>
              );
            })}
          </M.TableBody>
          {/* TABLE BODY END */}

          {/* TABLE FOOTER */}
          <M.TableFooter>
            <M.TableRow>
              <M.TableCell>Total</M.TableCell>
              <M.TableCell />
              <M.TableCell />

              {Object.entries(totalValues).map((i) => (
                <M.TableCell align="right" key={i[0]}>
                  {i[1].toFixed(2)}
                </M.TableCell>
              ))}
            </M.TableRow>
          </M.TableFooter>
          {/* TABLE FOOTER */}
        </M.Table>
      </M.TableContainer>
    </M.Paper>
  );
};

export default IngredientsTable;

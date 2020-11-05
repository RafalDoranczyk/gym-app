import React from "react";
import { Container, Grid, Typography, Zoom } from "@material-ui/core";
import { Ingredient } from "store/ingredientsReducer/interfaces/reducer";
import { TabBar, CreateNewItemButton, Paginator } from "components";
import { CREATE_INGREDIENT_PATH } from "constants/routesURL";
import UseDeleteOnExit from "hooks/useDeleteOnExit";
import { actions, dispatches, useSelector } from "store";
import UseFetchWithTabBar from "hooks/useFetchWithTabBar";
import { useDispatch } from "react-redux";
import IngredientListElement from "./Element";
import { useStyles } from "./styles";
import UpdateIngredientDialog from "./Dialog/Dialog";

const IngredientListPage: React.FunctionComponent = () => {
  const {
    ingredients: { userIngredients, ingredientSourceTypes },
    loading: { isLoading },
    root: { dialog },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { tabBarValue, onTabClick } = UseFetchWithTabBar({
    tabBarValues: ingredientSourceTypes,
    dispatchForTabBarValues: dispatches.fetchIngredientTypes,
    fetchItemsFunction: dispatches.fetchUserIngredients,
  });

  const { deletedItem, onDeleteClick } = UseDeleteOnExit();

  const classes = useStyles();

  const handleDelete = (id: number) => {
    dispatch(dispatches.deleteUserIngredient({ id }));
  };

  const onEditClick = (data: Ingredient) => {
    dispatch(actions.handleDialog({ open: true, data }));
  };

  return (
    <Container maxWidth="lg">
      <TabBar
        tabs={ingredientSourceTypes}
        onTabClick={onTabClick}
        tabBarValue={tabBarValue}
      />
      {userIngredients.data.length === 0 && !isLoading && (
        <div className={classes.noIngredientsWrapper}>
          <Typography variant="h6">You have no ingredients</Typography>
        </div>
      )}
      <Grid className={classes.ingredientWrapper} container spacing={2}>
        {userIngredients.data.map((ingredient, index) => (
          <Zoom
            onExited={() => handleDelete(ingredient.id)}
            in={deletedItem !== ingredient.id}
            timeout={(index + 1) * 150}
            key={ingredient.id}
          >
            <Grid item md={4} lg={3} xs={12} sm={6}>
              <IngredientListElement
                onEditClick={() => onEditClick(ingredient)}
                onDeleteClick={() => onDeleteClick(ingredient.id)}
                ingredient={ingredient}
              />
            </Grid>
          </Zoom>
        ))}
      </Grid>

      {dialog.open && <UpdateIngredientDialog data={dialog.data} />}
      <Paginator count={userIngredients.count} />
      <CreateNewItemButton to={CREATE_INGREDIENT_PATH} />
    </Container>
  );
};

export default React.memo(IngredientListPage);

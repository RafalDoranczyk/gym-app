import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dispatches, useSelector } from "store";
import FoodDayListPage from "./Page";

const FoodDayListPageHook: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { userFoodDays } = useSelector((state) => state.foodDays);
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(dispatches.fetchUserFoodDays({ page: 1 }));
  }, [dispatch]);

  return <FoodDayListPage isLoading={isLoading} userFoodDays={userFoodDays} />;
};

export default FoodDayListPageHook;

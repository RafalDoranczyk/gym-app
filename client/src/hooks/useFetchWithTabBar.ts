// HOOK FOR FETCHING LIST OF ELEMENTS WITH PAGINATION AND TAB BAR

import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppThunk } from "store/interfaces";

interface UseFetchWithTabBarProps {
  tabBarValues: string[];
  dispatchForTabBarValues: () => AppThunk;
  fetchItemsFunction: (values: any) => AppThunk;
}

interface UseFetchWitTabBarReturn {
  onTabClick: (val: string, index: number) => void;
  tabBarValue: number;
}

type UseFetchWithTabBarHook = (
  values: UseFetchWithTabBarProps
) => UseFetchWitTabBarReturn;

const PARAM_FILTER = "filter";

const UseFetchWithTabBar: UseFetchWithTabBarHook = ({
  dispatchForTabBarValues,
  tabBarValues,
  fetchItemsFunction,
}) => {
  const [tabBarValue, setTabBarValue] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const page = params.get("page") || 1;
  const paramFilter = params.get(PARAM_FILTER);

  const fetchTabBarValues = useCallback(() => {
    dispatch(dispatchForTabBarValues());
  }, [dispatch, dispatchForTabBarValues]);

  const fetchElements = useCallback(() => {
    const barIndex = tabBarValues.findIndex((t) => t === paramFilter);
    setTabBarValue(barIndex >= 0 ? barIndex : 0);
    dispatch(
      fetchItemsFunction({
        page: +page,
        filterString: paramFilter || tabBarValues[0],
      })
    );
  }, [dispatch, fetchItemsFunction, page, paramFilter, tabBarValues]);

  useEffect(() => {
    if (tabBarValues.length === 0) {
      fetchTabBarValues();
    } else {
      fetchElements();
    }
  }, [fetchElements, fetchTabBarValues, tabBarValues.length]);

  const onTabClick = (val: string, index: number) => {
    setTabBarValue(index);

    history.replace({
      search: `?${PARAM_FILTER}=${val}&page=1`,
    });
  };

  return {
    onTabClick,
    tabBarValue,
  };
};

export default UseFetchWithTabBar;

import React from "react";
import { Redirect } from "react-router-dom";
import { NOT_ALLOWED_PATH } from "constants/routesURL";
import LocalStorageService from "services/localStorage";

export const protectedRoute = (
  Component: React.FunctionComponent,
  props?: any
): JSX.Element => {
  const isAccessToken = LocalStorageService.getAccessToken();

  return isAccessToken ? (
    <Component {...props} />
  ) : (
    <Redirect to={NOT_ALLOWED_PATH} />
  );
};

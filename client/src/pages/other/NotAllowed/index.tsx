import React from "react";
import { Link } from "react-router-dom";
import * as paths from "constants/routesURL";

const NotAllowedPage: React.FunctionComponent = () => {
  return (
    <div>
      <h2> NOT ALLOWED</h2>

      <Link to={paths.LOGIN_PAGE_PATH}>Log in</Link>
      <Link to={paths.SIGNUP_PAGE_PATH}>Sign up</Link>
    </div>
  );
};

export default NotAllowedPage;

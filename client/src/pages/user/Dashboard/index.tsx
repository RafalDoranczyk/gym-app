import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "store";

const DashboardPage: React.FunctionComponent = () => {
  const { username } = useSelector((state) => state.auth);

  return (
    <div>
      <h2>Dashboard Page </h2>

      <Typography>Heloo {username}</Typography>
    </div>
  );
};

export default DashboardPage;

import React, { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useStyles } from "./styles";
import { navData } from "./navData";

const LogbookBottomNavigation: React.FunctionComponent = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const { pathname } = useLocation();

  useEffect(() => {
    const index = navData.findIndex((item) => pathname === item.to);
    setValue(index);
  }, [pathname]);

  return (
    <BottomNavigation className={classes.root} value={value}>
      {navData.map(({ label, icon, to }) => (
        <BottomNavigationAction
          key={label}
          component={Link}
          to={to}
          label={label}
          icon={icon}
        />
      ))}
    </BottomNavigation>
  );
};

export default LogbookBottomNavigation;

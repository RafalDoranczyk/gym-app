/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  IconButton,
} from "@material-ui/core";
import {
  MenuOutlined,
  NotificationsActive,
  Notifications,
  Brightness5,
  Brightness4,
} from "@material-ui/icons";
import { useStyles } from "./styles";

export interface MainNavigationData {
  text: string;
  to: string;
  icon: JSX.Element;
}

export interface MainNavigationProps {
  data: MainNavigationData[];
  onLogout: () => void;
  handleDarkMode: () => void;
  darkMode: boolean;
}

const MainNavigation: React.FunctionComponent<MainNavigationProps> = ({
  data,
  darkMode,
  handleDarkMode,
  onLogout,
}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  const classes = useStyles();

  return (
    <div className={classes.topNav}>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuOutlined />
      </IconButton>

      <div className={classes.badgesWrapper}>
        <IconButton onClick={handleDarkMode}>
          {darkMode ? <Brightness4 /> : <Brightness5 />}
        </IconButton>

        <IconButton>
          <Badge badgeContent={0} color="secondary">
            {0 ? <NotificationsActive /> : <Notifications />}
          </Badge>
        </IconButton>
      </div>
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          className={classes.drawer}
          role="navigation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {data.map(({ text, to, icon }) => (
              <ListItem
                to={to}
                key={text}
                onClick={text === "Logout" ? onLogout : () => {}}
                component={Link}
                button
                className={classes.linkItem}
              >
                <ListItemIcon className={classes.linkIcon}>{icon}</ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default MainNavigation;

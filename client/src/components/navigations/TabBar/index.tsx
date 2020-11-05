import React from "react";
import { AppBar, Tabs, Tab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    width: "800px",
    maxWidth: "90vw",
    margin: "0 auto",
  },
});

export interface TabBarProps {
  tabs: string[];
  onTabClick: (val: string, index: number) => void;
  tabBarValue: number;
}

const TabBar: React.FunctionComponent<TabBarProps> = ({
  tabs,
  onTabClick,
  tabBarValue,
}) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.wrapper} position="static" color="default">
      <Tabs
        variant="scrollable"
        value={tabBarValue}
        indicatorColor="primary"
        textColor="secondary"
      >
        {tabs.map((text, index) => (
          <Tab
            onClick={() => onTabClick(text.toLowerCase(), index)}
            wrapped
            key={text}
            label={text}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default TabBar;

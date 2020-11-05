import React, { useState } from "react";
import { AppBar, Tab, Tabs, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      backgroundColor: "inherit",
      boxShadow: "none",
    },
    tab: {
      fontSize: "12px",
    },
  })
);

export interface TabBarWithPanelsProps {
  tabs: string[];
  panels: React.ReactNode[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

const TabBarWithPanels: React.FunctionComponent<TabBarWithPanelsProps> = ({
  panels,
  tabs,
}) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChangeValue = (e: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Tabs onChange={handleChangeValue} value={value}>
          {tabs.map((tab) => (
            <Tab key={tab} label={tab} />
          ))}
        </Tabs>
      </AppBar>
      {panels.map((panel, index) => (
        <TabPanel key={index} value={value} index={index}>
          {panel}
        </TabPanel>
      ))}
    </>
  );
};

export default TabBarWithPanels;

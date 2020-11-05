import { Typography } from "@material-ui/core";
import React from "react";

export interface LogbookProps {}

const Logbook: React.FunctionComponent<LogbookProps> = () => {
  return (
    <div>
      <Typography
        style={{ fontWeight: "bold", letterSpacing: "2px" }}
        variant="h5"
      >
        My index
      </Typography>
    </div>
  );
};

export default Logbook;

import { Container } from "@material-ui/core";
import React from "react";
import { TabBarWithPanels } from "components";
import { dispatches, useSelector } from "store";
import UseFetchOnMount from "hooks/useFetchOnMount";
import UpdatePanel from "./UpdatePanel";
import HistoryPanel from "./HistoryPanel";

const LogbookMeasurementsPage: React.FunctionComponent = () => {
  const { allMeasurements } = useSelector((state) => state.logbook);

  UseFetchOnMount(dispatches.fetchUserMeasurements);

  return (
    <Container maxWidth="md" disableGutters>
      {allMeasurements.length > 0 && (
        <TabBarWithPanels
          tabs={["Update", "History"]}
          panels={[
            <UpdatePanel />,
            <HistoryPanel allMeasurements={allMeasurements} />,
          ]}
        />
      )}
    </Container>
  );
};

export default LogbookMeasurementsPage;

import { Fade, Typography, useTheme, colors } from "@material-ui/core";
import React from "react";
import { Line } from "react-chartjs-2";
import { Measurements } from "store/logbookReducer/interfaces/reducer";
import { ChartData, ChartDataSets } from "chart.js";
import { useStyles } from "./styles";

const col = [
  colors.blue[100],
  colors.yellow[100],
  colors.teal[100],
  colors.green[100],
  colors.deepPurple[100],
  colors.red[100],
];

export interface MeasurementsHistoryPanelProps {
  allMeasurements: Measurements[];
}

const MeasurementsHistoryPanel: React.FunctionComponent<MeasurementsHistoryPanelProps> = ({
  allMeasurements,
}) => {
  const createDatasets = () => {
    const datasets: ChartDataSets[] = Object.keys(allMeasurements[0])
      .filter((e) => e !== "createdAt")
      .map((o, index) => ({
        type: "line",
        label: o,
        data: [],
        pointBackgroundColor: col[index],
        borderColor: col[index],
        showLine: true,
        fill: false,
      }));
    return datasets;
  };

  const chartData: ChartData = {
    datasets: createDatasets(),
    labels: [],
  };

  allMeasurements.forEach((m) => {
    Object.entries(m).forEach((e) => {
      const index = chartData.datasets?.findIndex((el) => el.label === e[0]);

      if (index !== -1 && typeof index === "number" && chartData.datasets) {
        chartData?.datasets[index]?.data?.unshift(e[1]);
      }
    });
    chartData.labels?.unshift(m.createdAt ? m.createdAt : "");
  });

  const theme = useTheme();
  const classes = useStyles();

  return (
    <Fade in>
      <div>
        <Typography className={classes.description}>
          Click the legend label if you don't want o see it on the chart.
        </Typography>
        <div className={classes.chartWrapper}>
          <Line
            height={400}
            width={100}
            legend={{
              position: "bottom",
              labels: {
                fontColor: theme.palette.text.secondary,
                padding: 22,
              },
            }}
            options={{
              responsive: true,
              hover: {
                mode: "x-axis",
                intersect: true,
              },
              tooltips: {
                mode: "x-axis",
                intersect: true,
              },
              showLines: true,
              maintainAspectRatio: false,
            }}
            data={chartData}
          />
        </div>
      </div>
    </Fade>
  );
};

export default MeasurementsHistoryPanel;

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartData } from "chart.js";
import { colors, Fade, Typography, useTheme } from "@material-ui/core";
import { useStyles } from "./styles";

export interface ChartContentProps {
  carbs: number;
  protein: number;
  fat: number;
}

const ChartContent: React.FunctionComponent<ChartContentProps> = ({
  carbs,
  protein,
  fat,
}) => {
  const classes = useStyles();
  const { palette } = useTheme();
  const data: ChartData = {
    datasets: [
      {
        data: [carbs, protein, fat],
        backgroundColor: [
          palette.carbs.light,
          palette.protein.light,
          palette.fat.light,
        ],
        borderColor: "inherit",
        hoverBorderColor: "inherit",
      },
    ],
    labels: ["Carbs", "Protein", "Fat"],
  };

  return (
    <Fade in>
      <div className={classes.chartWrapper}>
        <Typography className={classes.title}>
          Hover the bars to see more info
        </Typography>
        <Doughnut
          options={{
            legend: {
              position: "left",
              onClick: () => {},
              labels: {
                fontSize: 14,
                fontColor: colors.grey[400],
              },
            },
            tooltips: {
              mode: "nearest",
            },
          }}
          data={data}
        />
      </div>
    </Fade>
  );
};

export default ChartContent;

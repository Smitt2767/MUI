import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const SalesByAge = () => {
  const theme = useTheme();

  const data = [
    {
      name: "18-39",
      uv: 30,
      fill: theme.palette.text.secondary,
    },
    {
      name: "40-59",
      uv: 45,
      fill: theme.palette.error.main,
    },
    {
      name: "60-79",
      uv: 60,
      fill: theme.palette.warning.main,
    },
    {
      name: "80+",
      uv: 75,
      fill: theme.palette.primary.main,
    },
  ];
  return (
    <Paper
      sx={{
        p: "1.5rem",
      }}
    >
      <Typography
        fontWeight={900}
        color="textPrimary"
        variant="h5"
        sx={{
          mb: "1rem",
        }}
      >
        Sales By Category
      </Typography>
      <ResponsiveContainer width="100%" height={244}>
        <RadialBarChart
          innerRadius="15%"
          outerRadius="100%"
          barSize={16}
          data={data}
          barGap={1}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey={"value"}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background={{ fill: theme.palette.background.default }}
            cornerRadius={16}
            label={{
              position: "insideStart",
              fill: "#fff",
              fontWeight: 700,
              fontSize: "0.8rem",
            }}
            dataKey="uv"
          />
          <Legend
            align="right"
            wrapperStyle={{ fontWeight: 700, fontSize: "0.8rem" }}
            iconSize={16}
            layout="vertical"
            verticalAlign="middle"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default SalesByAge;

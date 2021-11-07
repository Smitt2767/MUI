import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const Progress = () => {
  const theme = useTheme();
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
        Progress
      </Typography>
      <ResponsiveContainer width="100%" height={210}>
        <RadialBarChart
          innerRadius="85%"
          outerRadius="85%"
          barSize={32}
          data={[{ fill: theme.palette.primary.main, value: 75 }]}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey="value"
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            cornerRadius={16}
            label={{
              fill: theme.palette.text.primary,
              fontSize: theme.typography.h1.fontSize,
              fontWeight: theme.typography.h1.fontWeight,
              position: "center",
            }}
            background={{ fill: theme.palette.background.default }}
            clockWise
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default Progress;

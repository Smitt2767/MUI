import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    subject: "Marketing",
    A: 110,
  },
  {
    subject: "Research",
    A: 98,
  },
  {
    subject: "Sales",
    A: 86,
  },
  {
    subject: "Ops",
    A: 99,
  },
  {
    subject: "HR",
    A: 85,
  },
  {
    subject: "Dev",
    A: 65,
  },
];

const Budget = () => {
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
        Budget
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: theme.palette.text.secondary, fontSize: 14 }}
          />
          <Radar
            dataKey="A"
            name="Budget ($k)"
            stroke={theme.palette.primary.main}
            strokeWidth={8}
            fill={theme.palette.primary.main}
          />
          <Tooltip
            contentStyle={{
              borderRadius: theme.shape.borderRadius,
              boxShadow: theme.shadows[3],
              backgroundColor: theme.palette.background.paper,
              border: "none",
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default Budget;

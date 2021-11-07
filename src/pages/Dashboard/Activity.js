import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    value: 2400,
  },
  {
    name: "Fab",
    value: 1398,
  },
  {
    name: "Mar",
    value: 9800,
  },
  {
    name: "Apr",
    value: 3908,
  },
  {
    name: "May",
    value: 4800,
  },
  {
    name: "Jun",
    value: 3800,
  },
  {
    name: "Jul",
    value: 4300,
  },
];
const Activity = () => {
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
        Activity
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            interval="preserveStartEnd"
            tick={{
              fill: theme.palette.text.secondary,
              fontSize: 12,
            }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: theme.shape.borderRadius,
              boxShadow: theme.shadows[3],
              backgroundColor: theme.palette.background.paper,
              border: "none",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            fill={theme.palette.primary.main}
            fillOpacity={0.3}
            stroke={theme.palette.primary.main}
            strokeWidth={6}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default Activity;

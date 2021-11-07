import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const SalesByCategory = () => {
  const theme = useTheme();
  const data = [
    {
      name: "Books",
      fill: theme.palette.primary.main,
      value: 400,
    },
    {
      name: "Movies & Tv",
      fill: theme.palette.warning.main,
      value: 300,
    },
    {
      name: "Software",
      fill: theme.palette.error.main,
      value: 300,
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
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            stroke={theme.palette.background.paper}
            strokeWidth={8}
          />

          <Tooltip
            contentStyle={{
              borderRadius: 16,
              boxShadow: theme.shadows[3],
              backgroundColor: theme.palette.background.paper,
              borderColor: theme.palette.background.paper,
            }}
            itemStyle={{
              color: theme.palette.text.primary,
            }}
          />
          <Legend wrapperStyle={{ fontSize: "0.8rem", fontWeight: 700 }} />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default SalesByCategory;

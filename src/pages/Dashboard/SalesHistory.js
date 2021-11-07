import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import MovingIcon from "@mui/icons-material/Moving";
const data = [
  {
    name: "Mon",
    value: 4000,
  },
  {
    name: "Tue",
    value: 3000,
  },
  {
    name: "Wed",
    value: 2000,
  },
  {
    name: "Thu",
    value: 2780,
  },
  {
    name: "Fri",
    value: 1890,
  },
  {
    name: "Sat",
    value: 2390,
  },
];

const SalesHistory = () => {
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
        Sales History
      </Typography>
      <ResponsiveContainer width="100%" height={135}>
        <BarChart width={150} height={40} data={data}>
          <Bar
            dataKey="value"
            fill={theme.palette.primary.main}
            radius={[50, 50, 50, 50]}
          />
        </BarChart>
      </ResponsiveContainer>
      <Box
        sx={{
          mt: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h2" gutterBottom>
            567
          </Typography>
          <Typography variant="span" color="textSecondary">
            $ Today
          </Typography>
        </Box>
        <MovingIcon
          sx={{
            color: theme.palette.text.secondary,
          }}
        />
      </Box>
    </Paper>
  );
};

export default SalesHistory;

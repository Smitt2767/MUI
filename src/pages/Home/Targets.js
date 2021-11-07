import { Paper, Typography, Box } from "@mui/material";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { useTheme } from "@mui/styles";

const ProgressContainer = ({ name, value, color }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "0.5rem",
        }}
      >
        <Typography fontWeight={700} color="textPrimary">
          {name}
        </Typography>
        <Typography fontWeight={700} color="textPrimary">
          {value}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        color="inherit"
        sx={{
          color,
        }}
      />
    </Box>
  );
};

const Targets = () => {
  const theme = useTheme();
  const targetsData = [
    { id: 1, name: "Views", value: 75, color: "primary.main" },
    { id: 2, name: "Followers", value: 50, color: "warning.main" },
    { id: 3, name: "Income", value: 25, color: "error.main" },
  ];

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        p: "1.5rem",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{
          mb: "2rem",
        }}
      >
        Targets
      </Typography>
      <Box
        sx={{
          gap: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {targetsData.map((target) => (
          <ProgressContainer key={target.id} {...target} />
        ))}
      </Box>
    </Paper>
  );
};

export default Targets;

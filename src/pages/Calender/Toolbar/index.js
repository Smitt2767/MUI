import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const CalendarToolbar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" fontWeight={900} color="textPrimary">
        Calendar
      </Typography>
      <IconButton
        size="large"
        sx={{
          bgcolor: "primary.light",
          ":hover": {
            bgcolor: "primary.main",
          },
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default CalendarToolbar;

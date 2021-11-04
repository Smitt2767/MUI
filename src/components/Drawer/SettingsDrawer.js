import React from "react";
import { Drawer, IconButton, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useSettings } from "../../context/SettingsProvider";
import { WIDTH } from "../../constants/drawer";
import { Box } from "@mui/system";

const SettingsDrawer = () => {
  const { setOpen, open } = useSettings();
  const theme = useTheme();
  return (
    <Drawer
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", lg: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: WIDTH,
        },
      }}
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          backgroundColor: theme.palette.grey[900],
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            Settings
          </Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;

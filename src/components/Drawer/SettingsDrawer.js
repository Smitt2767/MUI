import React from "react";
import { Drawer, IconButton,  Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useSettings } from "../../context/SettingsProvider";
import { WIDTH, colors } from "../../constants/drawer";
import { Box } from "@mui/system";
import ToggleButton from "../ToggleButton/ToggleButton";
import ColorPiker from "../ColorPicker/ColorPicker";

const modeButtons = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
];
const sidebarCollapsedButtons = [
  { name: "Collapsed", value: "yes" },
  { name: "Full", value: "no" },
];

const SettingsDrawer = () => {
  const {
    setOpen,
    open,
    mode,
    collapsed,
    handleModeChange,
    hanldeCollapsedChange,
    primaryColor,
    setPrimaryColor,
  } = useSettings();

  return (
    <Drawer
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        zIndex: 1300,
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
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "3rem",
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
        <Box marginBottom={3}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
            gutterBottom
          >
            Mode
          </Typography>
          <ToggleButton
            size="large"
            value={mode}
            onChange={(e) => {
              handleModeChange(e.target.value);
            }}
            buttons={modeButtons}
          />
        </Box>
        <Box marginBottom={3}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
            gutterBottom
          >
            Sidebar
          </Typography>
          <ToggleButton
            size="large"
            value={collapsed ? "yes" : "no"}
            onChange={(e) => {
              hanldeCollapsedChange(e.target.value === "yes" ? true : false);
            }}
            buttons={sidebarCollapsedButtons}
          />
        </Box>
        <Box marginBottom={3}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
            gutterBottom
          >
            Primay Color
          </Typography>
          <ColorPiker
            colors={colors}
            selectedColor={primaryColor}
            onChange={(value) => {
              setPrimaryColor(value);
            }}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;

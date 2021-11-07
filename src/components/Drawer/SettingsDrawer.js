import React from "react";
import { Drawer, IconButton, Radio, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useSettings } from "../../context/SettingsProvider";
import { WIDTH } from "../../constants/drawer";
import { Box } from "@mui/system";
import ToggleButton from "../ToggleButton/ToggleButton";

const modeButtons = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
];
const sidebarCollapsedButtons = [
  { name: "Collapsed", value: "yes" },
  { name: "Full", value: "no" },
];

const colors = ["#64B5F6", "#7BDCB5", "#F78DA7", "#607D8B"];

const ColorPiker = () => {
  const { primaryColor, setPrimaryColor } = useSettings();

  return colors.map((color) => (
    <Radio
      key={color}
      checked={primaryColor === color}
      onChange={() => setPrimaryColor(color)}
      value="a"
      name="radio-buttons"
      color="primary"
      sx={{
        color,
      }}
    />
  ));
};

const SettingsDrawer = () => {
  const {
    setOpen,
    open,
    mode,
    collapsed,
    handleModeChange,
    hanldeCollapsedChange,
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
          <ColorPiker />
        </Box>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;

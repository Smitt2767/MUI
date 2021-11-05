import React from "react";
import {
  ButtonGroup,
  Drawer,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
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
  { name: "Collapsed", value: 1 },
  { name: "Full", value: 0 },
];

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
            exclusive={true}
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
            value={collapsed ? 1 : 0}
            onChange={(e) => {
              hanldeCollapsedChange(!!+e.target.value);
            }}
            buttons={sidebarCollapsedButtons}
            exclusive={true}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;

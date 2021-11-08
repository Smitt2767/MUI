import { AppBar, IconButton, Toolbar } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useSettings } from "../../context/SettingsProvider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/styles";
import { useLocation } from "react-router-dom";
import HomePageToolBar from "../../pages/Home/Toolbar";
import DashboardToolbar from "../../pages/Dashboard/Toolbar";
import CalendarToolbar from "../../pages/Calender/Toolbar";

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { setIsMainDrawerOpen } = useSettings();
  const location = useLocation();

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",

          bgcolor: "background.default",
          py: "3rem",
        }}
        disableGutters
      >
        {matches && (
          <IconButton
            size="large"
            onClick={() => {
              setIsMainDrawerOpen(true);
            }}
            sx={{
              mr: "0.5rem",
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {location.pathname === "/" && <HomePageToolBar />}
        {location.pathname === "/dashboard" && <DashboardToolbar />}
        {location.pathname === "/calendar" && <CalendarToolbar />}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

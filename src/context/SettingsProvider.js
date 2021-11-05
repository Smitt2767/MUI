import React, { createContext, useContext, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import useLocalStorage from "../hooks/useLocalStorage";
import { COLLAPSED_WIDTH, WIDTH } from "../constants/drawer";
import theme from "../theme";

const SettingsContext = createContext();

export const useSettings = () => {
  return useContext(SettingsContext);
};

const getThemeMode = (get) => {
  if (window && window.localStorage) {
    const theme = get("mode");
    if (theme) return theme;

    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return darkMode ? "dark" : "light";
  }
};

const getCollapsedDrawerState = (get) => {
  if (window && window.localStorage) {
    return get("collapsed");
  }
};

const SettingsProvider = ({ children }) => {
  const { get, set } = useLocalStorage();
  const [mode, setMode] = useState(() => getThemeMode(get));
  const [collapsed, setCollapsed] = useState(() =>
    getCollapsedDrawerState(get)
  );
  const [open, setOpen] = useState(false);

  const handleModeChange = (value) => {
    setMode(value);
    set("mode", value);
  };
  const hanldeCollapsedChange = (value) => {
    setCollapsed(value);
    set("collapsed", value);
  };

  return (
    <SettingsContext.Provider
      value={{
        mode,
        drawerWidth: collapsed ? COLLAPSED_WIDTH : WIDTH,
        collapsed,
        open,
        setOpen,
        handleModeChange,
        hanldeCollapsedChange,
      }}
    >
      <CssBaseline />
      <ThemeProvider theme={theme(mode)}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

import { makeStyles, useTheme } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSettings } from "../../context/SettingsProvider";

const useStyle = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    display: "flex",
    alignItems: "stretch",
  },
  addWidth: {
    [theme.breakpoints.down("md")]: {
      minWidth: 0,
    },
  },
}));

const Layout = ({ children }) => {
  const classes = useStyle();
  const theme = useTheme();
  const { drawerWidth } = useSettings();

  useEffect(() => {
    window.theme = theme;
  }, [theme]);

  return (
    <Box className={classes.box}>
      <Box minWidth={drawerWidth} className={classes.addWidth} />
      <Box
        sx={{
          px: "3rem",
          flexGrow: 1,
          overflowY: "auto",
          mb: "1rem",
          [theme.breakpoints.down("sm")]: {
            px: "1rem",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

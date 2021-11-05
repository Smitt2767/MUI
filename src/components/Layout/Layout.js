import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
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
  main: {},
}));

const Layout = ({ children }) => {
  const classes = useStyle();

  const { drawerWidth } = useSettings();

  return (
    <Box className={classes.box}>
      <Box minWidth={drawerWidth} />
      <Box
        sx={{
          padding: "1rem",
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

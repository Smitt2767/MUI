import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";

const SvgContainer = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        svg: {
          width: "100%",
          height: "100%",
          ".fill-primary": { fill: theme.palette.primary.light },
          ".fill-secondary": { fill: theme.palette.secondary.light },
          ".fill-error": { fill: theme.palette.error.light },
          ".fill-success": { fill: theme.palette.success.light },
          ".fill-warning": { fill: theme.palette.warning.light },
          ".fill-paper": { fill: theme.palette.background.paper },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default SvgContainer;

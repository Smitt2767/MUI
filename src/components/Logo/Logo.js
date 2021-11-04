import { Button } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";

import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

const Logo = ({ size, ...boxProps }) => {
  const theme = useTheme();
  return (
    <Box {...boxProps}>
      <Button
        disableRipple
        sx={{
          color: theme.palette.text.primary,
          padding: 0,
          minWidth: "auto",
          "&:hover": {
            background: "transparent",
          },
        }}
      >
        <LogoSvg height={size} width={size} />
      </Button>
    </Box>
  );
};

export default Logo;

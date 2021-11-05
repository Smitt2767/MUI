import { IconButton } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";

const Logo = ({ size, ...boxProps }) => {
  const theme = useTheme();
  return (
    <Box {...boxProps}>
      <IconButton
        component={Link}
        sx={{
          color: theme.palette.text.primary,
          padding: 0,
          minWidth: "auto",
          "&:hover": {
            background: "transparent",
          },
        }}
        to="/"
      >
        <LogoSvg height={size} width={size} />
      </IconButton>
    </Box>
  );
};

export default Logo;

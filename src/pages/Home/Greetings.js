import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SvgContainer from "../../components/SvgContainer/SvgContainer";
import { ReactComponent as WelcomeSvg } from "../../assets/welcome.svg";

const Greetings = () => {
  return (
    <Box
      sx={{
        p: "1.5rem",
      }}
    >
      <Typography variant="h1" color="textPrimary" gutterBottom>
        Hi Jhon
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 300,
        }}
        color="textPrimary"
        gutterBottom
      >
        Welcome back
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        This page is designed to give some important information about the
        application. Let's make someting together!
      </Typography>
      <SvgContainer>
        <WelcomeSvg />
      </SvgContainer>
    </Box>
  );
};

export default Greetings;

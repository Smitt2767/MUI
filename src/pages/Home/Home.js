import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Grid container>
          <Grid item sm={12} md={6} lg={4}></Grid>
          <Grid item sm={12} md={6} lg={4}></Grid>
          <Grid item sm={12} md={6} lg={4}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;

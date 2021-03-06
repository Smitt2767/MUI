import { Grid } from "@mui/material";
import React from "react";
import Congratulations from "./Congratulations";
import Greetings from "./Greetings";
import LikesAndViews from "./LikesAndViews";
import Meetings from "./Meetings";
import Targets from "./Targets";

const Home = () => {
  return (
    <Grid container columnSpacing={{
      sm: 0,
      md: 2
    }}
    rowSpacing={2}>
      <Grid item sm={12} md={6} lg={4}>
        <Greetings />
        <Congratulations />
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <LikesAndViews />
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <Targets />
        <Meetings />
      </Grid>
    </Grid>
  );
};

export default Home;

import { Grid } from "@mui/material";
import React from "react";
import Activity from "./Activity";
import Budget from "./Budget";
import Info from "./Info";
import InfoProgress from "./InfoProgress";
import Progress from "./Progress";
import RecentUser from "./RecentUser";
import SalesByAge from "./SalesByAge";
import SalesByCategory from "./SalesByCategory";
import SalesHistory from "./SalesHistory";
import TeamProgress from "./TeamProgress";

const Dashboard = () => {
  return (
    <>
      <Info />
      <Grid
        container
        spacing={2}
        sx={{
          mb: "1rem",
        }}
      >
        <Grid item xs={12} lg={8}>
          <Activity />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Budget />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          mb: "1rem",
        }}
      >
        <Grid item xs={12} lg={4}>
          <SalesHistory />
        </Grid>
        <Grid item xs={12} lg={4}>
          <InfoProgress />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Progress />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          mb: "1rem",
        }}
      >
        <Grid item xs={12} lg={4}>
          <RecentUser />
        </Grid>
        <Grid item xs={12} lg={8}>
          <TeamProgress />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          mb: "1rem",
        }}
      >
        <Grid item xs={12} lg={4}>
          <SalesByCategory />
        </Grid>
        <Grid item xs={12} lg={8}>
          <SalesByAge />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

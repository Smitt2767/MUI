import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const InfoCard = ({ name, value }) => {
  return (
    <Grid item xs={6} lg={3}>
      <Paper
        sx={{
          p: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={900}
          color="textPrimary"
          gutterBottom
        >
          {value}
        </Typography>
        <Typography variant="span" color="textSecondary" fontSize="0.85rem">
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
};

const data = [
  { name: "Visits", value: "20 700" },
  { name: "Sales", value: "$ 1 550" },
  { name: "Orders", value: "149" },
  { name: "Users", value: "657" },
];

const Info = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        mb: "1rem",
        width: "calc(100% + 16px)"
      }}
    >
      {data.map((item) => (
        <InfoCard key={item.name} {...item} />
      ))}
    </Grid>
  );
};

export default Info;

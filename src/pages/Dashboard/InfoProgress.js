import React from "react";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Avatar, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const data = [
  { name: "Visits", value: 75, Icon: SupervisorAccountIcon },
  { name: "Orders", value: 50, Icon: ShoppingBasketIcon },
  { name: "Sales", value: 25, Icon: AttachMoneyIcon },
];

const InfoProgressCard = ({ name, value, Icon }) => {
  return (
    <Grid item>
      <Paper
        sx={{
          p: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          sx={{
            color: "common.white",
          }}
        >
          <Icon />
        </Avatar>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "0.5rem",
            }}
          >
            <Typography variant="span" fontWeight={700} sontSize="1.2rem">
              {name}
            </Typography>
            <Typography variant="span" color="textSecondary">
              {value}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            sx={{
              height: 9,
            }}
            value={value}
            color="primary"
          />
        </Box>
      </Paper>
    </Grid>
  );
};

const InfoProgress = () => {
  return (
    <Grid container rowSpacing={2}>
      {data.map((item) => (
        <InfoProgressCard key={item.name} {...item} />
      ))}
    </Grid>
  );
};

export default InfoProgress;

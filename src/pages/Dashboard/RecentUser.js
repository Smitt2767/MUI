import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";

const RecentUserCard = ({ name, role }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          gap: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            color: "common.white",
          }}
        >
          <PersonIcon />
        </Avatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="span" color="textPrimary" fontWeight={700}>
            {name}
          </Typography>
          <Typography variant="span" color="textSecondary">
            {role}
          </Typography>
        </Box>
      </Box>
      <IconButton
        component={Link}
        to="/users"
        sx={{
          ":hover": {
            bgcolor: "background.default",
          },
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            fontSize: "1rem",
          }}
        />
      </IconButton>
    </Box>
  );
};

const data = [
  { name: "Arriaga Rhys", role: "Admin" },
  { name: "Core Laura", role: "Member" },
  { name: "Jagger Joshua", role: "Member" },
];

const RecentUser = () => {
  return (
    <Paper
      sx={{
        p: "1.5rem",
      }}
    >
      <Typography
        fontWeight={900}
        color="textPrimary"
        variant="h5"
        sx={{
          mb: "1rem",
        }}
      >
        Recent Users
      </Typography>
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid item key={item.name}>
            <RecentUserCard key={item.name} {...item} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default RecentUser;

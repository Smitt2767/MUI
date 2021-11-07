import { Avatar, Paper, Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";

const MeetingContainer = ({ name, time, image }) => {
  return (
    <Paper
      sx={{
        p: "1.5rem",
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
        <Avatar src={image} />
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
            {time}
          </Typography>
        </Box>
      </Box>
      <IconButton
        component={Link}
        to="/calendar"
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
    </Paper>
  );
};

const meetingsData = [
  {
    id: 1,
    name: "Emmy Anderson",
    time: "8:00 - 10:00",
    image: "img/portrait-1.jpg",
  },
  {
    id: 2,
    name: "Joy McGlynn",
    time: "11:00 - 12:00",
    image: "img/portrait-2.jpg",
  },
  {
    id: 3,
    name: "Mara Dach",
    time: "14:00 - 15:00",
    image: "img/portrait-3.jpg",
  },
];

const Meetings = () => {
  return (
    <Box
      sx={{
        mt: "2.5rem",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={900}
        color="textPrimary"
        sx={{
          mb: "1.5rem",
        }}
      >
        Mettings
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {meetingsData.map((item) => (
          <MeetingContainer key={item.id} {...item} />
        ))}
        <Paper
          sx={{
            p: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddIcon />
        </Paper>
      </Box>
    </Box>
  );
};

export default Meetings;

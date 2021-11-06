import React from "react";
import StarIcon from "@mui/icons-material/Star";

import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";

const Congratulations = () => {
  return (
    <Card
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: "1.5rem",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "background.paper",
            color: "text.primary",
            mb: 3,
          }}
        >
          <StarIcon />
        </Avatar>
        <Typography
          sx={{
            fontWeight: 600,
          }}
          gutterBottom
          variant="h5"
        >
          Congratulations John
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 300,
          }}
          gutterBottom
          variant="subtitle2"
        >
          You have completed 75% of your profile. Your current progress is
          great.
        </Typography>
        <Button
          sx={{
            width: "auto",
            p: "1rem",
            mt: "1.5rem",
            bgcolor: "background.paper",
            fontWeight: 800,
            ":hover": {
              bgcolor: "background.default",
            },
          }}
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default Congratulations;

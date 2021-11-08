import {
  Avatar,
  Badge,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Popover,
  Typography,
} from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";

const NotificationMessages = () => {
  return (
    <>
      <ListItem
        sx={{
          display: "flex",
          alignItems: "center",
          width: "20rem",
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ color: "inherit" }}>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <Typography variant="body1">
            You have{" "}
            <Typography component="span" sx={{ fontWeight: 600 }}>
              5
            </Typography>{" "}
            unread messages
          </Typography>
          <Typography variant="caption">7 months ago</Typography>
        </Box>
      </ListItem>
      <ListItem
        sx={{
          display: "flex",
          alignItems: "center",
          width: "20rem",
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ color: "inherit" }}>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <Typography variant="body1">
            <Typography component="span" sx={{ fontWeight: 600 }}>
              Jhon Smith
            </Typography>{" "}
            has written a new comment on your profile
          </Typography>
          <Typography variant="caption">7 months ago</Typography>
        </Box>
      </ListItem>
    </>
  );
};

const HomePageToolbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <IconButton
        size="large"
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge variant="dot" color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        elevation={0}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Box
          sx={{
            px: 2,
          }}
        >
          <List>
            <NotificationMessages />
          </List>
          <Button
            sx={{
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            See all notifications
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default HomePageToolbar;

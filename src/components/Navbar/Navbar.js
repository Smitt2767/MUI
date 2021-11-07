import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { useSettings } from "../../context/SettingsProvider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/styles";
import { useLocation } from "react-router-dom";

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

const ForHomePage = () => {
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
        <NotificationsIcon />
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

const ForDashboardPage = () => {
  return (
    <Typography variant="h2" fontWeight={900} color="textPrimary">
      Dashbaord
    </Typography>
  );
};

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { setIsMainDrawerOpen } = useSettings();
  const location = useLocation();

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",

          bgcolor: "background.default",
          py: "3rem",
        }}
        disableGutters
      >
        {matches && (
          <IconButton
            size="large"
            onClick={() => {
              setIsMainDrawerOpen(true);
            }}
            sx={{
              mr: "0.5rem",
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {location.pathname === "/" && <ForHomePage />}
        {location.pathname === "/dashboard" && <ForDashboardPage />}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

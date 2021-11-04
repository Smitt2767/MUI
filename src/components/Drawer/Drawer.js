import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

import { useSettings } from "../../context/SettingsProvider";
import Logo from "../Logo/Logo";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const drawerItems = [
  { name: "Home", Icon: HomeIcon, id: 1, path: "/" },
  { name: "Dashboard", Icon: BarChartIcon, id: 2, path: "/dashboard" },
  { name: "Users", Icon: PeopleIcon, id: 3, path: "/users" },
  { name: "Calendar", Icon: EventIcon, id: 4, path: "/calendar" },
  { name: "Projects", Icon: AccountTreeIcon, id: 5, path: "/projects" },
  { name: "Profile", Icon: PersonIcon, id: 6, path: "/profile" },
  { name: "Help", Icon: HelpIcon, id: 7, path: "/help" },
];

const SideDrawer = () => {
  const { drawerWidth, collapsed, setOpen } = useSettings();

  const drawer = (
    <>
      <Logo
        size={40}
        sx={{
          padding: "2rem",
        }}
      />
      <List disablePadding component="nav" sx={{ px: 2, flexGrow: 1 }}>
        {drawerItems.map((item) => (
          <ListItem
            button
            disableRipple
            component={NavLink}
            key={item.path}
            end={true}
            to={item.path}
          >
            <ListItemAvatar>
              <Avatar sx={{ color: "inherit", bgcolor: "transparent" }}>
                <item.Icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              sx={{
                display: collapsed ? "none" : "block",
              }}
            />
          </ListItem>
        ))}
      </List>
      <List sx={{ px: 2 }}>
        <ListItem button onClick={() => setOpen(true)}>
          <ListItemAvatar>
            <Avatar sx={{ color: "inherit" }}>
              <SettingsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Settings"
            sx={{
              display: collapsed ? "none" : "block",
            }}
          />
        </ListItem>
      </List>
    </>
  );

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
        }}
      >
        {drawer}
      </Box>
    </Drawer>
  );
};

export default SideDrawer;

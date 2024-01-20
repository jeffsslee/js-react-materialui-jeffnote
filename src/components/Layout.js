import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const classes = {
  root: {
    display: "flex",
  },
  mainContent: {
    background: "#f1f1f1",
    padding: 3, // 3*8 = "16px"
    width: "100%",
    paddingTop: "100px",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
    },
  },
  active: {
    background: "#f1f1f1",
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
};
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <Box sx={classes.root}>
      {/* app bar */}
      <AppBar sx={classes.appbar}>
        <Toolbar>
          <Typography flexGrow={1}>
            Today is the {format(new Date(), "do MMMM y")}
          </Typography>
          <Typography>Jeff</Typography>
          <Avatar
            alt="user"
            src="/user-png-64.png"
            sx={{ marginLeft: "16px" }}
          />
        </Toolbar>
      </AppBar>
      {/* side drawer */}
      <Drawer sx={classes.drawer} variant="permanent" anchor="left">
        <Box>
          <Typography variant="h5" sx={{ textAlign: "center", margin: "8px" }}>
            Jeff Notes
          </Typography>
        </Box>
        <Box>
          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={location.pathname === item.path ? classes.active : null}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
      {/* main content */}
      <Box sx={classes.mainContent}>{children}</Box>
    </Box>
  );
};
export default Layout;

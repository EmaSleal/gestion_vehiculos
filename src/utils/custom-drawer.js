import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function CustomDrawer({ isToggleDrawer, isDrawerOpen, toggleDrawer }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant={isToggleDrawer ? "temporary" : "permanent"}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={isToggleDrawer ? isDrawerOpen : true}
      onClose={toggleDrawer}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <List>
        <ListItem button component={Link} to="/agregarVehiculo">
          <ListItemText primary="Agregar Vehículo" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Listado de Vehículos" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default CustomDrawer;
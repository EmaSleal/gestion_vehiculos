import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useComponents } from "./hooks/use-components";
import AddVehicleForm from "./pages/vehicle-form/add-vehicle-form";
import VehicleList from "./pages/vehicle-list/vehicle-list";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Footer from "./pages/footer";
import CustomDrawer from "./utils/custom-drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% )`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "block",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    overflow: "auto",
    position: "relative",
    display: "block",
    margin: "5rem auto 10rem auto",
    boxSizing: "border-box",

    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      padding: theme.spacing(3),
      overflow: "auto",
      position: "relative",
      display: "block",
      margin: "6rem auto",
      boxSizing: "border-box",
    },
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.primary.contrastText,
    left: "0",
    bottom: "0",
    width: "100%",
    position: "fixed",
  },
}));

function App() {
  const { vehicles, addVehicle, updateVehicle, deleteVehicle, addVehicleDefault } = useComponents();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isToggleDrawer = true;

  useEffect(() => {
    if (!vehicles.length) {
      addVehicleDefault();
    }
  }, [vehicles]);

  useEffect(() => {
    if (!isEditing) {
      setSelectedVehicle(null);
    }
  }, [isEditing]);



  function handleVehicleSubmit(vehicle) {
    if (isEditing) {
      updateVehicle(selectedVehicle.id, vehicle);
      setIsEditing(false);
    } else {
      addVehicle(vehicle);
    }
  }

  function handleDeleteVehicle(id) {
    deleteVehicle(id);
    if (selectedVehicle?.id === id) {
      setIsEditing(false);
    }
  }

  function handleEditVehicle(editVehicle) {
    setSelectedVehicle(editVehicle);
    setIsEditing(true);
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  function handleCancel() {
    setIsEditing(false);
    setSelectedVehicle(null);
  }

  return (
    <Router>
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar
            color="inherit"
            style={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h4" style={{ margin: "auto" }}>
              Gestión de Vehículos
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <CustomDrawer
        isToggleDrawer={isToggleDrawer}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
      <main className={classes.content}>
        <Routes>
          <Route
            path="/"
            element={
              <VehicleList
                vehicles={vehicles}
                onDeleteVehicle={handleDeleteVehicle}
                onVehicleEdit={handleEditVehicle}
              />
            }
          />
          <Route
            path="/agregarVehiculo"
            element={
              <AddVehicleForm
                vehicle={isEditing ? selectedVehicle : {}}
                onVehicleSubmit={handleVehicleSubmit}
                onCancel={handleCancel}
              />
            }
          />
        </Routes>
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
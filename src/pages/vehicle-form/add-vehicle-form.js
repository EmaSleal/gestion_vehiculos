import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormatAlignCenter from "@material-ui/icons/FormatAlignCenter";
import Grid from "@material-ui/core/Grid";
import { Navigate } from "react-router-dom";
import VehicleFormFields from "./vehicle-form-fields";
import VehicleCard from "../../utils/card";

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    textAlign: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    marginTop: theme.spacing(3),
  },
}));

function AddVehicleForm({
  vehicle: initialVehicle = {},
  onVehicleSubmit,
  onCancel,
}) {
  const [vehicle, setVehicle] = useState(initialVehicle);
  const [isFormValid, setIsFormValid] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const classes = useStyles();
  const isEditing = !!initialVehicle.marca;

  useEffect(() => {
    setVehicle(initialVehicle);
  }, [initialVehicle]);

  function handleChange(event) {
    const { name, value } = event.target;
    setVehicle((prevVehicle) => ({
      ...prevVehicle,
      [name]: value,
    }));
  }

  function validateForm() {
    const isFormValid =
      vehicle.marca &&
      vehicle.modelo &&
      vehicle.anio &&
      vehicle.color &&
      vehicle.numPuertas &&
      vehicle.motor &&
      vehicle.transmision &&
      vehicle.tipoCombustible &&
      vehicle.numLlantas;
    setIsFormValid(isFormValid);
  }

  useEffect(() => {
    validateForm();
  }, [vehicle]);

  function handleSubmit(event) {
    event.preventDefault();
    onVehicleSubmit(vehicle);
    setVehicle({});
    setIsFormValid(false);
    setShouldRedirect(true);
  }

  function handleCancel(event) {
    event.preventDefault();

    setVehicle({});
    onCancel();

    setShouldRedirect(true);
  }

  return (
    <VehicleCard
      width={isEditing ? "md" : "xs"}
    >
      {shouldRedirect ? <Navigate to="/" /> : null}
      <Avatar className={classes.avatar}>
        <FormatAlignCenter />
      </Avatar>
      <Typography component="h1" variant="h5">
        {isEditing ? "Editar Vehículo" : "Agregar Vehículo"}
      </Typography>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <VehicleFormFields vehicle={vehicle} handleChange={handleChange} />
            <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
            {isEditing ? (
              <Button
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
                disabled={!isFormValid}
              >
                Editar Vehículo
              </Button>
            ) : null}
            {!isEditing ? (
              <Button
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
                disabled={!isFormValid}
              >
                Agregar Vehículo
              </Button>
            ) : null}
            </Grid>
          </Grid>
        </form>
      </div>
    </VehicleCard>
  );
}

export default AddVehicleForm;

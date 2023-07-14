import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SelectComponent from "../../utils/select";

function VehicleFormFields({ vehicle, handleChange }) {
  const numPuertasOptions = [...Array(7)].map((_, index) => index + 2);

  const transmisionOptions = ["Automática", "Manual", "Semi-automática"];

  const tipoCombustibleOptions = ["Gasolina", "Diésel", "Eléctrico", "Híbrido"];

  const numLlantasOptions = [2, 3, 4, 6];

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          type="text"
          variant="outlined"
          label="Marca"
          autoFocus
          autoComplete="marca"
          fullWidth
          name="marca"
          value={vehicle.marca || ""}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          type="text"
          variant="outlined"
          label="Modelo"
          autoFocus
          autoComplete="modelo"
          fullWidth
          name="modelo"
          value={vehicle.modelo || ""}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          type="number"
          variant="outlined"
          label="Año"
          autoFocus
          autoComplete="anio"
          fullWidth
          name="anio"
          value={vehicle.anio || ""}
          onChange={handleChange}
          inputProps={{ min: 1980 }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          type="text"
          variant="outlined"
          label="Color"
          autoFocus
          autoComplete="color"
          fullWidth
          name="color"
          value={vehicle.color || ""}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          type="text"
          variant="outlined"
          label="Motor"
          autoFocus
          autoComplete="motor"
          fullWidth
          name="motor"
          value={vehicle.motor || ""}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectComponent
          value={vehicle.numPuertas || ""}
          onChange={handleChange}
          name="numPuertas"
          label="Número de Puertas"
          options={numPuertasOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectComponent
          value={vehicle.transmision || ""}
          onChange={handleChange}
          name="transmision"
          label="Transmisión"
          options={transmisionOptions}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectComponent
          value={vehicle.tipoCombustible || ""}
          onChange={handleChange}
          name="tipoCombustible"
          label="Tipo de combustible"
          options={tipoCombustibleOptions}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectComponent
          value={vehicle.numLlantas || ""}
          onChange={handleChange}
          name="numLlantas"
          label="Número de llantas"
          options={numLlantasOptions}
        />
      </Grid>
    </>
  );
}

export default VehicleFormFields;
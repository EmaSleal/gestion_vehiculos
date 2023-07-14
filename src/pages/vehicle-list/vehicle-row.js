import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { DeleteForeverRounded } from "@material-ui/icons";
import { Edit } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";

function Vehicle({ vehicle, onDeleteVehicle, onVehicleEdit }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  function handleDelete() {
    onDeleteVehicle(vehicle.id);
  }

  function handleEdit() {
    onVehicleEdit(vehicle);
    setShouldRedirect(true);
  }

  return (
    <TableRow key={vehicle.id}>
      {shouldRedirect ? <Navigate to="/agregarVehiculo" /> : null}
      <TableCell style={{ width: 160 }} align="right">
        {vehicle.marca}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {vehicle.modelo}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {vehicle.anio}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {vehicle.color}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {vehicle.numPuertas}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {vehicle.motor}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {vehicle.transmision}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {vehicle.tipoCombustible}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {vehicle.numLlantas}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        <Button onClick={handleDelete}>{<DeleteForeverRounded />} </Button>
        <Button onClick={handleEdit}>{<Edit />}</Button>
      </TableCell>
    </TableRow>
  );
}

export default Vehicle;

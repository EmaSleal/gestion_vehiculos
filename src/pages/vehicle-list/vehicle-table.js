import React, { useState } from 'react';
import Vehicle from './vehicle-row';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent, Container, CardHeader, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%',
    height: '100%',
  },
  root: {
    margin: '0 auto',
  },
}));

function VehicleTable({ vehicles, onDeleteVehicle, onVehicleEdit }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState('');

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, vehicles.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setPage(0);
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    const searchTerm = searchValue.toLowerCase();
    return (
      (vehicle.marca?.toLowerCase().includes(searchTerm) || '') ||
      (vehicle.modelo?.toLowerCase().includes(searchTerm) || '') ||
      (vehicle.anio?.toString().includes(searchTerm) || '') ||
      (vehicle.color?.toLowerCase().includes(searchTerm) || '') ||
      (vehicle.numPuertas?.toString().includes(searchTerm) || '') ||
      (vehicle.motor?.toLowerCase().includes(searchTerm) || '') ||
      (vehicle.transmision?.toLowerCase().includes(searchTerm) || '') ||
      (vehicle.tipoCombustible?.toLowerCase().includes(searchTerm) || '') ||
      (vehicle.numLlantas?.toString().includes(searchTerm) || '') 
      
    );
  });

  return (
    <Container component="main">
      
          <div>
            <TextField
              autoFocus
              type="text"
              variant="outlined"
              label="Filtro de búsqueda"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="custom pagination table">
              <TableBody>
                <TableRow>
                  <TableCell style={{ width: 160 }} align="right">
                    Marca
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    Modelo
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    Año
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    Color
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    Número de puertas
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    Motor
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    Transmisión
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    Tipo de combustible
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    Número de llantas
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    Acciones
                  </TableCell>
                </TableRow>
                {(rowsPerPage > 0
                  ? filteredVehicles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : filteredVehicles
                ).map((row) => (
                  <Vehicle key={row.id} vehicle={row} onDeleteVehicle={onDeleteVehicle} onVehicleEdit={onVehicleEdit} />
                ))}

                {filteredVehicles.length === 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={10} align="center">
                      No hay vehiculos registrados
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={10}
                    count={vehicles.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'vehiculos por pagina' },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
    </Container>
  );
}

VehicleTable.propTypes = {
  vehicles: PropTypes.array.isRequired,
  onDeleteVehicle: PropTypes.func.isRequired,
  onVehicleEdit: PropTypes.func.isRequired,
};

export default VehicleTable;
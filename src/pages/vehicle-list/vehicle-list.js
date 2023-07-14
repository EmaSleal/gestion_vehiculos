import React from 'react';
import Vehicle from './vehicle-row';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Container, CardHeader } from '@material-ui/core';
import VehicleTable from './vehicle-table';
import VehicleCard from '../../utils/card';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
  },
}));

function VehicleList({ vehicles, onDeleteVehicle, onVehicleEdit }) {
  const classes = useStyles();

  return (

      <VehicleCard title="Lista de Vehículos" headerIcon={<i className="fas fa-car"></i>}>
          <i className="fas fa-car"></i>
          <Typography component="h1" variant="h5">
            Lista de Vehículos
          </Typography>
          <VehicleTable
            vehicles={vehicles}
            onDeleteVehicle={onDeleteVehicle}
            onVehicleEdit={onVehicleEdit}
          />
      </VehicleCard>

  );
}

VehicleList.propTypes = {
  vehicles: PropTypes.array.isRequired,
  onDeleteVehicle: PropTypes.func.isRequired,
  onVehicleEdit: PropTypes.func.isRequired,
};

export default VehicleList;
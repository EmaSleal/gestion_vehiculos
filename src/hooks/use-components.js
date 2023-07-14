import { useState, createContext } from 'react';


const ComponentsContext = createContext();

  const transmisionOptions = ["Automática", "Manual", "Semi-automática"];
  const tipoCombustibleOptions = ["Gasolina", "Diésel", "Eléctrico", "Híbrido"];
  const numLlantasOptions = [2, 3, 4, 6]; 

  //creo un array con 10 vehiculos



const useComponents = () => {
  const [vehicles, setVehicles] = useState([]);


  const addVehicleDefault = () => {
  for (let i = 0; i < 10; i++) {
    
    let defaultVehicle = {
      id: i ,
      marca: `Marca ${i + 1}`,
        modelo: `Modelo ${i + 1}`,
        anio: 2022,
        color: `Color ${i + 1}`,
        numPuertas: Math.floor(Math.random() * 7) + 2,
        motor: `Motor ${i + 1}`,
        transmision:
          transmisionOptions[Math.floor(Math.random() * 3)],
        tipoCombustible:
          tipoCombustibleOptions[Math.floor(Math.random() * 4)],
        numLlantas: numLlantasOptions[Math.floor(Math.random() * 4)],
    };
    vehicles.push(defaultVehicle);
  }
}

  const addVehicle = (vehicle) => {
    //agrego un id al vehiculo
    const id = Math.floor(Math.random() * 10000) + 1;
    const newVehicle = { id, ...vehicle };
    setVehicles([...vehicles, newVehicle]);
    
  };

  const updateVehicle = (id, updatedVehicle) => {

    const updatedVehicles = vehicles.map((vehicle) => {
      if (vehicle.id === id) {
        return { ...vehicle, ...updatedVehicle };
      }
      return vehicle;
    });
    setVehicles(updatedVehicles);
  };

  const deleteVehicle = (id) => {
    const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    setVehicles(updatedVehicles);
  };

  return {vehicles, addVehicle, updateVehicle, deleteVehicle, addVehicleDefault};
};

export { ComponentsContext, useComponents };
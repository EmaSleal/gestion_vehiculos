import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

function SelectComponent({ value, onChange, name, label, options }) {


  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="label">{label}</InputLabel>
      <Select
        labelId="label"
        id="select"
        label={label}
        name={name}
        value={value || ""}
        onChange={onChange}
      >
        <MenuItem value="">
          <em>Seleccione</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectComponent;
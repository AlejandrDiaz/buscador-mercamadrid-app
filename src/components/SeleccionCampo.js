import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SeleccionCampo({campo2, setCampo2}) {
  return (
    
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={campo2}
          label="Categoría"
          onChange={(elemento) => setCampo2(elemento.target.value)}
        >
          <MenuItem value={"FechaDesde"}>FechaDesde</MenuItem>
          <MenuItem value={"FechaHasta"}>FechaHasta</MenuItem>
          <MenuItem value={"CodigoVariedad"}>CodigoVariedad</MenuItem>
          <MenuItem value={"DescripcionVariedad"}>DescripcionVariedad</MenuItem>
          <MenuItem value={"DescripcionOrigen"}>DescripcionOrigen</MenuItem>
          <MenuItem value={"Kilos"}>Kilos</MenuItem>
          <MenuItem value={"PrecioMasFrecuente"}>PrecioMasFrecuente</MenuItem>
          <MenuItem value={"PrecioMaximo"}>PrecioMaximo</MenuItem>
          <MenuItem value={"PrecioMinimo"}>PrecioMinimo</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
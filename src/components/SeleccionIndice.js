import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export default function SeleccionIndice({indice, setIndice}) {
  return (
    
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Indice</InputLabel>
        <Select
          labelId="demo-simple-select-label-index"
          id="demo-simple-select-index"
          value={indice}
          label="Indice"
          onChange={(elementoi) => setIndice(elementoi.target.value)}
        >
          <MenuItem value={"2019"}>2019</MenuItem>
          <MenuItem value={"2020"}>2020</MenuItem>
          <MenuItem value={"2021"}>2021</MenuItem>
          <MenuItem value={"2022"}>2022</MenuItem>
          <MenuItem value={"20*"}>Todos</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
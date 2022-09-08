import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function MercamadridList({ datos }) {
  if (datos.length === 0 ) {
    console.log("La lista está vacía");
  }
  else {
    return (
      datos.length && <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell>Codigo Variedad</TableCell>
              <TableCell align="right">Fecha Desde</TableCell>
              <TableCell align="right">Fecha Hasta</TableCell>
              <TableCell align="right">Descripcion Variedad</TableCell>
              <TableCell align="right">Descripcion Origen</TableCell>
              <TableCell align="right">Kilos</TableCell>
              <TableCell align="right">Precio Mas Frecuente</TableCell>
              <TableCell align="right">Precio Maximo</TableCell>
              <TableCell align="right">Precio Minimo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datos.map((dato) => (
              <TableRow
                key={dato.CodigoVariedad}
                sx={{ '&:last-child td, &:last-child th': { border:0 } }}
              >
                <TableCell component="th" scope="row">
                  {dato.CodigoVariedad}
                </TableCell>
                <TableCell align="right">{dato.FechaDesde}</TableCell>
                <TableCell align="right">{dato.FechaHasta}</TableCell>
                <TableCell align="right">{dato.DescripcionVariedad}</TableCell>
                <TableCell align="right">{dato.DescripcionOrigen}</TableCell>
                <TableCell align="right">{dato.Kilos}</TableCell>
                <TableCell align="right">{dato.PrecioMasFrecuente}</TableCell>
                <TableCell align="right">{dato.PrecioMaximo}</TableCell>
                <TableCell align="right">{dato.PrecioMinimo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import '../App.css'

export default function BarraBusqueda({ placeholder, setBusquedat }) {
  return (
    
      <Paper
        component="form"
        sx={{ padding: "5px 10px", alignItems: "center", width: 400, display: "flex", elevation:6 }}
      >
        <InputBase
          onChange={(element) => setBusquedat(element.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
        />
        <IconButton id="btnicon" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
  );
}
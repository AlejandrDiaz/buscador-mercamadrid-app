import { useState } from "react";
import BarraBusqueda from "./components/BarraBusqueda";
import ListaBusqueda from "./components/ListaBusqueda";
import SeleccionIndice from "./components/SeleccionIndice";
import SeleccionCampo from "./components/SeleccionCampo";
import "./App.css";
import { useEffect } from "react";
import axios from 'axios';

function App() {
  const [busquedat, setBusquedat] = useState('');
  const [indice, setIndice] = useState('');
  const [micampo2, setCampo2] = useState('');
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3030/elastic?indice=${indice}&campo=${micampo2}&text=${busquedat}`).then((result) => {
      const { info } = result.data;
      const tempDatos = info.map((inf) => { return {FechaDesde: inf.FechaDesde,FechaHasta: inf.FechaHasta,CodigoVariedad: inf.CodigoVariedad,DescripcionVariedad: inf.DescripcionVariedad,DescripcionOrigen: inf.DescripcionOrigen,Kilos: inf.Kilos,PrecioMasFrecuente: inf.PrecioMasFrecuente,PrecioMaximo: inf.PrecioMaximo,PrecioMinimo: inf.PrecioMinimo}})
      setDatos(tempDatos);
    });
  }, [busquedat])

  
  
 
  
  return (
    <div className="App">
        <div className="divinside">
          <div className="indiceselect">
          <SeleccionIndice setIndice={setIndice}/>
          </div>
          <div className="camposelect">
          <SeleccionCampo setCampo2={setCampo2}/>
          </div>
          <BarraBusqueda placeholder="Busca aquí" setBusquedat={setBusquedat} />
        </div> 
      <ListaBusqueda datos={datos}/>
    </div>
  );
}
export default App;
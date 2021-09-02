import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({})
  const [id, setId] = useState(1)
  const [sw, setSw] = useState(true)
  useEffect(() => {
    
    if (sw) {
      axios.get(`http://localhost:7800/api/v1/datos/${id}`, {

    })
      .then(function (response) {
        console.log("MUESTRA LA DATA",response.data.data);
        setData(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
        setSw(false)
      })
      .then(function () {
        // always executed
      });
    }

  }, [id])
  setInterval(()=> setId(id + 1), 10000)
  
  return (
    <div className="App">
      <h1> gps taxi </h1>
      <span> Latitud: </span>
      <input type="text" id="latitud" name="latitud" value={data.latitud} readOnly/><br />

      <span> longitud: </span>
      <input type="text" id="longitud" name="longitud" value={data.longitud} readOnly/><br />

      <span> fecha </span>
      <input type="text" id="fecha" name="fecha" value={data.fecha} readOnly/><br />

      <span> hora: </span>
      <input type="text" id="hora" name="hora" value={data.hora} readOnly/><br />
      
    </div>
  );
}

export default App;

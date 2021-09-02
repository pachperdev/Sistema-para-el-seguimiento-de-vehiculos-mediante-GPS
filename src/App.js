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
      axios.get(`http://localhost:5000/api/v1/datos/${id}`, {

    })
      .then(function (response) {
        console.log("HOLA CARITAS",response.data.data);
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
      <input type="text" id="latitud" name="latitud" value={data.latitud} readonly/>
      
    </div>
  );
}

export default App;

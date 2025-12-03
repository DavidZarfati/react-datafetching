import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  let [dati, setDati] = useState([]);

  useEffect(() => {
    console.log("Daccio partire chiamata all'api");
    axios
      .get(
        "https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=10"
      )
      .then((resp) => {
        setDati(resp.data.response);
        console.log(dati);
      });
  }, [])
  return (
    <>
      {dati.map((d, index) => (
        <div key={index}>{d}</div>
      ))}
    </>
  );
}

export default App

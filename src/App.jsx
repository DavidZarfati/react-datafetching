import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let [dati, setDati] = useState([]);

  console.log("Daccio partire chiamata all'api");

  axios
    .get(
      "https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=10"
    )
    .then((resp) => {
      setDati(resp.data.response);
      console.log(dati);
    });

  return (
    <>
      {dati.map((d) => (
        <div>{d}</div>
      ))}
    </>
  );
}

export default App

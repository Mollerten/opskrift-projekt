import './App.css'
import OpskriftList from "./components/OpskriftList.jsx";
import TilføjOpskrift from "./components/TilføjOpskrift.jsx";
import {useEffect, useState} from "react";


function App() {

  const [opskrifter, setOpskrifter] = useState([])

  useEffect(() => {
     fetch("http://localhost:5000/opskrifter")
        .then(response => response.json())
        .then(data => setOpskrifter(data))
  }, [])

  return (
    <div className="App">

      <OpskriftList opskrifter={opskrifter}/>
        <TilføjOpskrift/>
    </div>
  )
}

export default App

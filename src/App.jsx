import './App.css'
import OpskriftList from "./components/OpskriftList.jsx";
import {useEffect, useState} from "react";


function App({ apiFacade }) {

  const [opskrifter, setOpskrifter] = useState([])

  useEffect(() => {
      apiFacade.getOpskrifter((data => setOpskrifter(data)))
     // fetch("http://localhost:5000/opskrifter")
     //    .then(response => response.json())
     //    .then(data => setOpskrifter(data))
  }, [])

  return (
    <div className="App">

      <OpskriftList opskrifter={opskrifter}/>

    </div>
  )
}

export default App

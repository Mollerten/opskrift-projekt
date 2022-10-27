import React from 'react';
import "../styles/Opskrift.css"


function Opskrift(props) {


    const {id, navn, pris, type, hyperlink, opskrift, setOpskrift} = props

    // console.log({hyperlink})
    return (
        <div className="opskrift-card">

            <h3>{navn}</h3>
            <p>Pris: {pris},-</p>
            <p>Type: {type}</p>
            <p><a href={hyperlink}>Link Til Opskrift</a></p>

            <button onClick={() => localStorage.setItem("gemtOpskrift", JSON.stringify(opskrift))}>GEM OPSKRIFT</button>

            <button onClick={
                () => {
                    const opskrift = JSON.parse(localStorage.getItem("gemtOpskrift")) || opskrift
                    setOpskrift(opskrift)
                }
            }>Hent Gemt Opskrift</button>
        </div>
    );
}

export default Opskrift;
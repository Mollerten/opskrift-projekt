import React from 'react';


function Opskrift(props) {


    const {navn, pris, type, hyperlink} = props

    console.log({hyperlink})
    return (
        <div>

            <h2>{navn}</h2>
            <p>{pris}</p>
            <p>{type}</p>
            <p>{hyperlink}</p>


        </div>
    );
}

export default Opskrift;
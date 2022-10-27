import React, { useState } from 'react';
import Opskrift from "./Opskrift.jsx";

function OpskriftList({opskrifter}) {

    const [opskrift, setOpskrift] = useState({});

    function getRandomInt() {
        const max = opskrifter.length;
        return Math.floor(Math.random() * max); // The maximum is exclusive and the minimum is inclusive
    }

    function getOpskrift() {
        const nyOpskrift = opskrifter[getRandomInt()]
        setOpskrift(nyOpskrift)
    }

    return (
        <div>
            <button onClick={getOpskrift}>Hent opskrift</button>
            <div>
                {<Opskrift
                    id={opskrift.id}
                    navn={opskrift.navn}
                    pris={opskrift.pris}
                    type={opskrift.type}
                    hyperlink={opskrift.hyperlink}
                />}
            </div>

            {/*{opskrifter.map (opskrift =>*/}
            {/*   <Opskrift key={opskrift.id}*/}
            {/*       id={opskrift.id}*/}
            {/*       navn={opskrift.navn}*/}
            {/*       pris={opskrift.pris}*/}
            {/*       type={opskrift.type}*/}
            {/*       hyperlink={opskrift.hyperlink}*/}
            {/*   />*/}
            {/*)}*/}
        </div>
    );
}

export default OpskriftList;
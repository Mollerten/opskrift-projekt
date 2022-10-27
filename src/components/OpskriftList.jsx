import React, { useState } from 'react';
import Opskrift from "./Opskrift.jsx";

function OpskriftList({opskrifter}) {

    const [opskrift, setOpskrift] = useState({});
    const [curValue, setCurValue] = useState(0);

    function getRandomInt() {
        const max = opskrifter.length;
        let randNum
        do {
            randNum = Math.floor(Math.random() * max); // The maximum is exclusive and the minimum is inclusive
        } while (randNum === curValue);
        setCurValue(randNum)
        return randNum
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

        </div>
    );
}

export default OpskriftList;
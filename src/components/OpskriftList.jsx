import React from 'react';
import Opskrift from "./Opskrift.jsx";

function OpskriftList({opskrifter}) {

    function getRandomInt() {
        const min = 1;
        const max = opskrifter.map().size;
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }


    return (
        <div>
            <Opskrift


            />
            {opskrifter[getRandomInt()]}

            {opskrifter.map (opskrift =>
               <Opskrift key={opskrift.id}
                   id={opskrift.id}
                   navn={opskrift.navn}
                   pris={opskrift.pris}
                   type={opskrift.type}
                   hyperlink={opskrift.hyperlink}
               />
            )}

        </div>
    );
}

export default OpskriftList;
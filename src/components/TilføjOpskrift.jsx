import React, {useState} from 'react';
import opskrift from "./Opskrift.jsx";

function TilføjOpskrift({ apiFacade, setOpskrifter, opskrifter }) {

    const initialValue ={
        "navn": "",
        "pris": 0,
        "type": "",
        "hyperlink": ""
    }

    const [nyOpskrift, setNyOpskrift] = useState(initialValue)

    const submitHandler = (event) =>{
        event.preventDefault()
        console.table(nyOpskrift)
        apiFacade.makeOpskrift((newOpskrift) => {
            console.log(newOpskrift)
        }, nyOpskrift)
        setOpskrifter([...opskrifter, nyOpskrift])
        setNyOpskrift(initialValue);
    }

    const handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.type === "number"
                                                 ? parseInt(target.value) : target.value;
        const name = target.name;
        setNyOpskrift({...nyOpskrift, [name]: value});
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Opret ny Opskrift: </label><br/>
            <input
                name="navn"
                value={nyOpskrift.navn}
                required
                onChange={handleChange}
                placeholder="Navn"
            /> <br/>
            <input
                name="pris"
                type={"number"}
                min={0}
                value={nyOpskrift.pris}
                required
                onChange={handleChange}
                placeholder="Pris"
            /> <br/>
            <input
                name="type"
                value={nyOpskrift.type}
                required
                onChange={handleChange}
                placeholder="Type"
            /> <br/>
            <input
                name="hyperlink"
                value={nyOpskrift.hyperlink}
                required
                onChange={handleChange}
                placeholder="Hyperlink"
            /> <br/>
                <button type="submit">Tilføj opskrift</button>
        </form>
        </div>
    );
}

export default TilføjOpskrift;

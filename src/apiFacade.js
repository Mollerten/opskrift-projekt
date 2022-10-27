import utils from "./utils.js";
let URL = "http://localhost:5000/opskrifter"


function apiFacade() {
    //OBSERVE fetchAny takes an url and a callback. The callback handles the data from the response body.
    function getOpskrifter(callback) {
        utils.fetchAny(URL, callback);
    }

    function makeOpskrift(callback, body) {
        utils.fetchAny(URL, callback, "POST", body)
    }

    return {
        getOpskrifter,
        makeOpskrift
    };
}
const returnValue = apiFacade();
export default returnValue;
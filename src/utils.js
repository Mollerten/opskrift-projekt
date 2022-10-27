const makeOptions = (method, body) => {
    method = method?method:'GET';
    let opts =  {
        method: method,
        headers: {
            ...(['PUT','POST'].includes(method) && { //using spread operator to conditionally add member to headers object.
                "Content-type": "application/json"}),
            "Accept": "application/json"
        }
    }
    if(body){
        opts.body = JSON.stringify(body);
    }
    return opts;
}

const errorCheck = (res) => {
    if(!res.ok){
        return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
}

const fetchAny = async (url, callback, method, body) => {
    try {
        const options = makeOptions(method, body);
        const res = await fetch(url, options)
        const data = await errorCheck(res)
        return await callback(data)
    } catch (err) {
        if (err.status) {
            err.fullError.then(e => console.log(e.detail))
        } else {
            console.log("Network error")
        }
    }

    // fetch(url,options)
    //     .then(res=>errorCheck(res))
    //     .then(data=>callback(data))
    //     .catch(err =>{
    //             if(err.status){
    //                 err.fullError.then(e=> console.log(e.detail))
    //             }
    //             else{console.log("Network error"); }
    //         }
    //     );
}

export default {fetchAny, makeOptions};
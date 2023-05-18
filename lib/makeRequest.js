// const utils = require('./utils');

const BASE_PATH = process.env.NODE_ENV == 'development' ? 'http://localhost:3002/api/v1' : 'https://sign.easyly.com/api/v1';
const DEFAULT_TIMEOUT = 80000;

function makeRequest(key,subKey,opts) {

    return fetch(BASE_PATH+''+opts.path, {
        method: opts.method,
        headers: new Headers({
            'Authorization': 'Bearer '+key,
            'subAccountSID':  subKey,
            'Content-Type': 'application/json'
        }),
        body:JSON.stringify(opts?.body),
    }).then(async(resp)=>{

        return [resp.status,await resp.json()];
    }).catch((e)=>{
        console.log("[error]");
        console.log(e.status);
        return [500,false];
    });
}

// module.exports = makeRequest;
export default makeRequest;
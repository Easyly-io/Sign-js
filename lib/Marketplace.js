import makeRequest from "./makeRequest";
// const utils = require("./utils");

class Marketplace {
    constructor(key,subKey) {
        this.key = key;
        this.subKey = subKey;
    }

    search(q) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/marketplace/'+q,
        });
    }
    mostUsed() {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/marketplace/mostUsed',
        });
    }

}


export default Marketplace;
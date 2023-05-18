// let Shapes = require('./Shapes.js').Shapes;
import makeRequest from "./lib/makeRequest.js";
import SubAccounts from "./lib/SubAccounts.js";
import Templates from "./lib/Templates.js";
import Marketplace from "./lib/Marketplace.js";

class Contracts {


    constructor(key,subKey,options = {}) {
        this.key = key;
        this.subKey = subKey;
        this.options = { ...options };

        this.subAccounts = new SubAccounts(key,subKey);
        this.templates = new Templates(key,subKey);
        this.marketplace = new Marketplace(key,subKey);
    }

    getAll() {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/contracts',
        });
    }
    get(contractKey) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/contracts/'+contractKey,
        });
    }
    delete(contractKey) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'DELETE',
            path: '/contracts/'+contractKey,
        });
    }
}

export default Contracts;
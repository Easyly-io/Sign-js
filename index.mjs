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

        this.makeRequest = makeRequest;

        this.subAccounts = new SubAccounts(this.makeRequest,key,subKey);
        this.templates = new Templates(this.makeRequest,key,subKey);
        this.marketplace = new Marketplace(this.makeRequest,key,subKey);
    }

    getAll() {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return this.makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/contracts',
        });
    }
    get(contractKey) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return this.makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/contracts/'+contractKey,
        });
    }
    delete(contractKey) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return this.makeRequest(this.key,this.subKey,{
            method: 'DELETE',
            path: '/contracts/'+contractKey,
        });
    }
}

export default Contracts;
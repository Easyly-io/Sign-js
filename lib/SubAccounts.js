import makeRequest from "./makeRequest";
// const utils = require("./utils");

class SubAccounts {
    constructor(key,subKey) {
        this.key = key;
        this.subKey =subKey;
    }

    getAll() {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/subAccounts'
        });
    }
    getData(subAccountId) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/subAccounts/'+subAccountId
        });
    }
    create(name) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'POST',
            path: '/subAccounts',
            body: {
                name:name
            }
        });
    }
}


// module.exports = SubAccounts;
export default SubAccounts;
// const utils = require("./utils");

class SubAccounts {
    constructor(makeRequest,key,subKey) {
        this.makeRequest = makeRequest;
        this.key = key;
        this.subKey =subKey;
    }

    getAll() {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return this.makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/subAccounts'
        });
    }
    getData(subAccountId) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return this.makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/subAccounts/'+subAccountId
        });
    }
    updateData(subAccountId,data) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}


        return this.makeRequest(this.key,this.subKey,{
            method: 'POST',
            path: '/subAccounts/'+subAccountId,
            body: data
        });
    }
    create(name) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return this.makeRequest(this.key,this.subKey,{
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
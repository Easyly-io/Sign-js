import makeRequest from "./makeRequest";
// const utils = require("./utils");

class Templates {
    constructor(key,subKey) {
        this.key = key;
        this.subKey = subKey;
    }

    getAll() {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/templates',
        });
    }
    get(id) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/templates/'+id,
        });
    }
    delete(id) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'DELETE',
            path: '/templates/'+id,
        });
    }
    send(id,tags) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'POST',
            path: '/templates/'+id+'/send',
            body: {
                tags:tags
            }
        });
    }
    duplicate(id) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'POST',
            path: '/templates/'+id+'/duplicate',
        });
    }
    addToMarketplace(id) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return makeRequest(this.key,this.subKey,{
            method: 'POST',
            path: '/templates/'+id+'/addToMarketplace',
        });
    }
}


export default Templates;
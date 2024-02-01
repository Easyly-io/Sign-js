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
    getStats() {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return this.makeRequest(this.key,this.subKey,{
            method: 'GET',
            path: '/contracts/stats',
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
    addContact(envelopeId,name,email) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return this.makeRequest(this.key,this.subKey,{
            method: 'POST',
            path: `/envelopes/${envelopeId}/contacts`,
            body: {
                name:name,
                email:email
            }
        });
    }
    updateContact(envelopeId,contactId,name,email) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return this.makeRequest(this.key,this.subKey,{
            method: 'POST',
            path: `/envelopes/${envelopeId}/contacts/${contactId}`,
            body: {
                name:name,
                email:email
            }
        });
    }
    deleteContact(envelopeId,contactId) {
        let isKeyValidated = true;//utils.checkKey(this.key);
        if(!isKeyValidated){return false;}

        return this.makeRequest(this.key,this.subKey,{
            method: 'DELETE',
            path: `/envelopes/${envelopeId}/contacts/${contactId}`
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
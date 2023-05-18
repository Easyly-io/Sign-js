# "Easyly sign" API


Use [Easyly sign](http://sign.easyly.com) as an ES module.

[![build status](https://img.shields.io/npm/l/contracter-js)](https://www.npmjs.com/package/contracter-js)
[![npm version](https://img.shields.io/npm/v/contracter-js)](https://www.npmjs.com/package/contracter-js)

## Installation

Use `npm` to install the Contracter.js module:

```sh
npm install contracter-js
```


## Usage

### `ContractsJS`

You can access all available function by importing and initializing ContractsJS class with your [Api Key](http://sign.easyly.com) from your account
```js
import ContractsJS from 'contracter-js';

const apiKey = "XXXXXXXXXXXXXXXXXXXX";
const contracts = new ContractsJS(apiKey);
```

### Get contracts example

```js
import ContractsJS from 'contracter-js';

const apiKey = "XXXXXXXXXXXXXXXXXXXX";
const contracts = new ContractsJS(apiKey);

const getContracts = async(e) => {
    let [status, resp] = await contracts.getAll();
    // status = Int: 200
    // resp = Object: [{...}]
}

useEffect((e)=>{
    getContracts()
},[])
```


### Full documentation can be found on [Easyly Sign](http://sign.easyly.com)


### Minimum requirements

The minimum supported version of React is v16.8. If you use an older version,
upgrade React to use this library. If you prefer not to upgrade your React
version, we recommend using legacy.

### Contributing

If you would like to contribute to React Stripe.js, please make sure to read our
[contributor guidelines](CONTRIBUTING.md).
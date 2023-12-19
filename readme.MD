# "Easyly sign" API


Use [Easyly sign](http://sign.easyly.com) as an ES module.

[![build status](https://img.shields.io/npm/l/@easyly/sign-js)](https://www.npmjs.com/package/@easyly/sign-js)
[![npm version](https://img.shields.io/npm/v/@easyly/sign-js)](https://www.npmjs.com/package/@easyly/sign-js)

## Installation

Use `npm` to install the module:

```sh
npm install @easyly/sign-js
```


## Usage

### `ContractsJS`

You can access all available function by importing and initializing ContractsJS class with your [Api Key](http://sign.easyly.com) from your account
```js
import ContractsJS from '@easyly/sign-js';

const apiKey = "XXXXXXXXXXXXXXXXXXXX";
const contracts = new ContractsJS(apiKey);
```

### Get contracts example

```js
import ContractsJS from '@easyly/sign-js';

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

If you would like to contribute to React Easyly.js, please make sure to read our
[contributor guidelines](CONTRIBUTING.md).
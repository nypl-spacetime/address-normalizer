# Address normalizer for NYC Space/Time Directory addresses

## Usage

First, install:

    npm install --save nypl-spacetime/address-normalizer

Then, use:

```js
const addressNormalizer = require('spacetime-address-normalizer')

const input = 'W. 25th'
console.log(addressNormalizer(input))
// Output: "West 25th Street"
```

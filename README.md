# Divide a list into object based on a specific field
---
New object = {
    key will be that field value: Value will be a list item containing that filed value
}
---

## Installation

Use the package manager to install foobar.

```bash
npm install dynamic-object-yadab
```

## Usage

```javascript
import { getDynamicObject } from 'dynamic-object-package'

# your data 

let list = [
    {
        product: 1,
        name: xiaomi 2/64
        brand: xiaomi
    },
    {
        product: 2,
        name: samsung A21
        brand: samsung
    },
    {
        product: 3,
        name: pocco x3 8/256
        brand: xiaomi
    },
]

getDynamicObject(list, 'brand') // instruct to divide list depending on brand (brandwise)

output: 
    {
        xioami: [{
            product: 1,
            name: xiaomi 2/64
            brand: xiaomi
        },{
            product: 3,
            name: pocco x3 8/256
            brand: xiaomi
        }],
        samsung: [{
            product: 2,
            name: samsung A21
            brand: samsung
        }]
    }

```

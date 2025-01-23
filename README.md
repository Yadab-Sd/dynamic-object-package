# **Dynamic Object Utility**

A lightweight utility for transforming and grouping arrays into objects based on a specific field. Perfect for scenarios where you need to reorganize collections for better data handling.

---

## **Installation**

Install the package using npm:

```bash
npm install dynamic-object-yadab
```

---
# Method
getDynamicObject(list: object[], key: string, skipKey?: boolean): object

#### Parameters:
- list: An array of objects to transform.
- key: The field used as the key for grouping. Supports dot notation for nested fields.
- skipKey (optional): If set to true, the specified key will be removed from the grouped objects. Default is false.

> Returns: An object where:
>> Keys are derived from the specified field.\
>> Values are arrays of objects (or individual objects, depending on your implementation).

---

# Usage
#### Example 1: Grouping by a Simple Key
```javascript
import { getDynamicObject } from 'dynamic-object-yadab';

const list = [
  { product: 1, name: 'iPhone 16 Pro Max 8/512', category: 'smartphone' },
  { product: 2, name: 'Whole Milk 5lb', category: 'grocery' },
  { product: 3, name: 'Samsung S21', category: 'smartphone' },
];

const result = getDynamicObject(list, 'category');
console.log(result);
```

#### Output:
```javascript
{
  "smartphone": [
    { product: 1, name: 'iPhone 16 Pro Max 8/512', category: 'smartphone' },
    { product: 3, name: 'Samsung S21', category: 'smartphone' }
  ],
  "grocery": [
    { product: 2, name: 'Whole Milk 5lb', category: 'grocery' }
  ]
}
```

#### Example 2: Removing the Key from Values
If you pass the third parameter (skipKey) as true:

```javascript
const result = getDynamicObject(list, 'category', true);
console.log(result);
```

#### Output:
```javascript
{
  "smartphone": [
    { product: 1, name: 'iPhone 16 Pro Max 8/512' },
    { product: 3, name: 'Samsung S21' }
  ],
  "grocery": [
    { product: 2, name: 'Whole Milk 5lb' }
  ]
}
```

#### Example 3: Grouping by Nested Key
```javascript
const list = [
  {
    product: 1,
    name: 'iPhone 16 Pro Max 8/512',
    category: { sku: 'smartphone', name: 'Smartphone' },
  },
  {
    product: 2,
    name: 'Whole Milk 5lb',
    category: { sku: 'grocery', name: 'Grocery' },
  },
  {
    product: 3,
    name: 'Samsung S21',
    category: { sku: 'smartphone', name: 'Smartphone' },
  },
];

const result = getDynamicObject(list, 'category.sku', true);
console.log(result);
```

#### Output:
```javascript
{
  "smartphone": [
    { product: 1, name: 'iPhone 16 Pro Max 8/512', category: { name: 'Smartphone' } },
    { product: 3, name: 'Samsung S21', category: { name: 'smartphone' } }
  ],
  "grocery": [
    { product: 2, name: 'Whole Milk 5lb', category: { name: 'Grocery' } }
  ]
}
```


> [!NOTE]
> If no item in the list is with the given key, you will see an error.

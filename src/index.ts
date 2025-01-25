export const getDynamicObject = (list: any[], key: string, skipKey?: boolean) => {
  let hasKeyInAtLeastOneItem = false;
  const obj: any = {};

  // Helper function to get the value of a nested key using dot notation
  const getNestedValue = (item: any, keyPath: string): any => {
    return keyPath.split('.').reduce((acc, curr) => (acc && acc[curr] != null ? acc[curr] : undefined), item);
  };

  list.forEach((item: { [x: string]: any }) => {
    const nestedValue = getNestedValue(item, key); // Get the nested value dynamically

    if (nestedValue !== null && nestedValue !== undefined) {
      hasKeyInAtLeastOneItem = true;
      const objKey = typeof nestedValue === "object" ? JSON.stringify(nestedValue) : nestedValue;

      if (!obj.hasOwnProperty(objKey)) {
        obj[objKey] = [];
      }

      if (skipKey) {
        // Remove the specified key (and its nested structure) from the object
        const filteredItem = JSON.parse(JSON.stringify(item)); // Deep clone the object
        let temp = filteredItem;
        const keys = key.split('.');
        for (let i = 0; i < keys.length - 1; i++) {
          if (temp[keys[i]]) {
            temp = temp[keys[i]];
          }
        }
        delete temp[keys[keys.length - 1]]; // Delete the final key
        obj[objKey].push(filteredItem);
      } else {
        obj[objKey].push(item);
      }
    }
  });

  if (!hasKeyInAtLeastOneItem) {
    throw new Error(`Wrong key: ${key}`);
  }

  return obj;
};

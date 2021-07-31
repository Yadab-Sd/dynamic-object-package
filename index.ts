module.exports.getDynamicObject = (list, fieldName) => { // this 'list' will devide based on 'fieldName'
    let obj = {}

    list.forEach(item => { 
        if (obj[item[fieldName]]) {
            obj[item[fieldName]].push(item)
        } else {
            obj[item[fieldName]] = [item]
        }
    })

    return obj;
}

module.exports.sayHi = () => {
    return "Hi";
}
console.log(this.sayHi())
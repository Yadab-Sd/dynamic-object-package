module.exports.getDynamicObject = (list, fieldName) => {
    return list.map(item => ({ [list.fieldName]: item}))
}
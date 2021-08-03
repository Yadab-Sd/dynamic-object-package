import a from './store';

export const getDynamicObject = (list: any[], fieldName: string) => { // this 'list' will devide based on 'fieldName'
    let obj:any = <{
        [index: string]: any
    }>{}

    list.forEach((item: { [x: string]: any }) => { 
        if (obj[item[fieldName]]) {
            obj[item[fieldName]].push(item)
        } else {
            obj[item[fieldName]] = [item]
        }
    })

    return obj;
}

export const sayHi = () => {
    return a();
}

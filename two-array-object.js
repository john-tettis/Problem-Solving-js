// turn arr of keys and arr of values into object
//['a', 'b', 'c', 'd'], [1, 2, 3]) =>{'a': 1, 'b': 2, 'c': 3, 'd': null}
function twoArrayObject(arr1=[],arr2=[]) {
    //reduce arr1 with index value
        //add key and val to object
    const obj = arr1.reduce((total,current,i)=>{
        if(arr2[i]===0)return{...total, [current]:0}
        return{...total, [current]: arr2[i] || null }
    },{})
    return obj;
}

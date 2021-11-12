// add whatever parameters you deem necessary
function countPairs(arr,val) {
    //put arr into a set
    let set = new Set(arr)
    //loop through arr, look for complementary in map
    return arr.reduce((total,current)=>{
        const complement = val-current;
        set.delete(current);
        return set.has(complement) ? total +1:total;
    },0)
}

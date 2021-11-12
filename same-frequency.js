// add whatever parameters you deem necessary
function sameFrequency(int1,int2) {
    //convert ints into strings
    const str1 = int1.toString();
    const str2 = int2.toString();
    //check lengths are the same
    if(str1.length !== str2.length) return false;
    //get counters for both ints
    let count1 = getCounter(str1)
    let count2 = getCounter(str2)
    //loop through str1 freqcounter
    for(key in count1){
    //compare to str2 freq counter
        if(count1[key] !== count2[key]) return false
    }
    return true;
}



function getCounter(str){
    let obj={};
    for(let val of str){
        obj[val] = (obj[val]+1) || 1;
    }
    return obj
}

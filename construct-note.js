// add whatever parameters you deem necessary

function constructNote(note, letters){
    //create frequency counter
    let noteFreg = getCounter(note);
    let letterFreq = getCounter(letters);
    //loop thorugh each key in freq1
    for(let key in noteFreg){
        //compare value to same key in freq 2, if not ===, return false
        if(noteFreg[key]>letterFreq[key] || letterFreq[key]==null)return false;
    }     
    //return true if reached this point
    return true;
}


function getCounter(str){
    let obj={};
    for(let val of str){
        obj[val] = (obj[val]+1) || 1;
    }
    return obj
}

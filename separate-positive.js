// add whatever parameters you deem necessary
function separatePositive(arr) {
    //define left and right pointers 
    let left =0;
    let right = arr.length-1
    //loop while left < right
    while(left<right){
        //extract left and right values
        let rVal = arr[right]
        let lVal = arr[left]
        //swap values if possible
        if(lVal<0 && rVal >=0) arr[left]=rVal, arr[right]=lVal;
        if(rVal<0) right--;
        if(lVal>0) left++;
    }
    return arr;

}

// add whatever parameters you deem necessary
function averagePair(arr,val) {
    //define left and right pointers
    let left = 0;
    let right = arr.length-1;
    //loop while left < right
    while(left<right){
        //avg left and right
        let avg= (arr[left] + arr[right])/2;
        if(avg=== val) return true;
        if(avg<val) left++; 
        else right--;
    }
    //return false if we made it this far
    return false;
         
}

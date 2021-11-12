// add whatever parameters you deem necessary
function pivotIndex(arr) {
   //declare left, right pointer, left, right count
   let left = 0;
   let right= arr.length-1;
   let rCount=0;
   let lCount=0;
   //loop while left< right-1
    while(left<=right){
        //get left, right vals
        let lVal= arr[left]
        let rVal= arr[right]
        //if they are equal, and left = right-2 return the index
        if(rCount === lCount && left === right) return left;
        //if right conunt is bigger than left, add to left count, increment left pointer
        if(rCount>lCount){
            lCount+=lVal;
            left++;
        }
        //otherwise increment right count
        else {
            rCount+=rVal;
            right--;
        }
    }
    return -1;
}

console.log(pivotIndex([1,2,3,5,3,2,1]))
// add whatever parameters you deem necessary
function longestFall(arr) {
    //check for empty array
    if(arr.length===0) return 0;
    //define max, current total values
    let max =1;
    let total=1;
    
    //loop through arr
    for(let i=0;i<arr.length-1;i++){
        let current= arr[i+1];
        let prev = arr[i]
        
        //if current < prev increment total
        //otherwise current total=1
        total = current<prev ? total+1:1;
        //update max
        max = Math.max(max,total);
    }
    //return
    return max;
    
        
    
}

longestFall([5, 4, 4, 4, 3, 2])
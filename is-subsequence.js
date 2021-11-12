// add whatever parameters you deem necessary
function isSubsequence(string1, string2) {
    //creater pointers for both strings
    let pointer1=0;
    let pointer2=0;
    //loop while pointers are in range
    while(pointer1<string1.length && pointer2< string2.length){
        let val1 = string1[pointer1]
        let val2 = string2[pointer2]
        //compare values of strings at pointer
        //if equal ++ both pointers
        if(val1===val2)pointer1++;
        pointer2++
        //else only ++ pointer2 
    }
    
    //if pointer1 is greater than string length, return true
    return pointer1>= string1.length
}
isSubsequence('hello', 'hello world'); // true
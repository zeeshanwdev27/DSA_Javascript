
/*
let arr = [6, 5, 8, 2, 1, 4, 3, 7]
let i = 0




while(i<arr.length){
    let correctIdx = arr[i]-1

    if(arr[i] != arr[correctIdx]){ 
        let temp = arr[i]
        arr[i] = arr[correctIdx]
        arr[correctIdx] = temp
    }
    else i++;
}


console.log(arr);

*/




// Question 2:  find missing number from the array 

let arr = [3,0,1]

function missingNumber (num){
    
    let i=0;

    while(i<num.length){
        let correctIdx = num[i]
        if(num[i]<num.length && num[i] != num[correctIdx]){
            let temp = num[i]
            num[i] = num[correctIdx]
            num[correctIdx] = temp
        }
        else i++
    }

    for(let j=0; j<num.length; j++){
        if(j != num[j]) return j
    }

    return num.length;

}


console.log(missingNumber(arr))
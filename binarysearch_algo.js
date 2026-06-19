let arr = [2,8,5,4,6,9,99,7,3,10,1,0]

for(let i=0; i< arr.length -1; i++){
    for(let j=0; j< arr.length-1 - i; j++){
        
        if(arr[j]> arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
        }
        
    }
}


let target = 99;
let left = 0;
let right = arr.length - 1;




while(left <= right){
    let middle = Math.floor((left + right) / 2)
    if( arr[middle] === target) { 
        return console.log("Target Acheived At Index", middle) 
    }
    if (target > arr[middle]) left = middle + 1
    else right = middle - 1
}
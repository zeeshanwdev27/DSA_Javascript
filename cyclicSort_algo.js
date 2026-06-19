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